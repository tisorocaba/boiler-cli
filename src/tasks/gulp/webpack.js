var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	webpack = require('webpack'),
	notifier = require('node-notifier'),
	path = require('path');

module.exports = function(applicationPath) {

	var pkg = require(applicationPath('package.json'));

	var webpackConfig = {
		entry: [applicationPath('application/main.js')],
		output: {
			path: applicationPath(),
			filename: 'temp/application.js'
		},
		resolve: {
			modulesDirectories: [
				applicationPath('libs'),
				applicationPath('application'),
				applicationPath('temp'),
				path.resolve(__dirname, '../../../node_modules')
			],
			alias: {
				config: applicationPath('config.js')
			}
		},
		module: {
			loaders: [
				{ test: /\.tpl$/, loader: require.resolve('../boiler/template-loader.js') }
			]
		}
	};

	var webpackCallback = function(err, stats, showLogs) {
		if(err) {
			throw new plugins.util.PluginError('[webpack]', err);
		} else {
			if(stats.hasErrors() || stats.hasWarnings()) {
				try {
					var errors;

					if(stats.compilation.errors[0]) {
						errors = stats.compilation.errors[0];
					}

					if(stats.compilation.warnings[0]) {
						errors = stats.compilation.warnings[0];
					}

					var message = [
						errors.module.rawRequest,
						errors.error.toString()
					].join('\n');

					notifier.notify({
						title: 'Boiler error',
						message: message
					});
				} catch(err) {}
			}

			if(showLogs) {
				plugins.util.log('[webpack]', stats.toString({colors: true, chunks: false}));
			}
		}
	};

	gulp.task('webpack', function() {
		webpackConfig.devtool = 'eval';
		webpackConfig.watch = true;

		webpack(webpackConfig, function(err, stats) {
			webpackCallback(err, stats, true);
		});
	});

	gulp.task('webpack-build', function(cb) {
		webpackConfig.output.filename = 'dist/' + pkg.version + '/js/application.min.js';

		webpackConfig.plugins = [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				},
				output: {
					comments: false
				}
			}),
			new webpack.BannerPlugin([
				pkg.name + ' - ' + pkg.description,
				'versão ' + pkg.version,
				pkg.work,
				'Equipe de desenvolvimento:',
				pkg.authors.map(function(a) { return '\t\t' + a;}).join('\n')
			].join('\n'), {entryOnly: true})
		];

		return webpack(webpackConfig, function(err, stats) {
			webpackCallback(err, stats, false);
			cb();
		});
	});
}