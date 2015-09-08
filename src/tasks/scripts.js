var webpack = require('webpack'),
	notifier = require('node-notifier'),
	path = require('path'),
	pkg = require(path.resolve(process.cwd(), './package.json'));

var	config = {
	entry: [path.resolve(process.cwd(), 'application/main.js')],
	output: {
		path: process.cwd(),
		filename: 'temp/application.js'
	},
	resolve: {
		modulesDirectories: [
			path.resolve(process.cwd(), 'libs'),
			path.resolve(process.cwd(), 'application'),
			path.resolve(process.cwd(), 'temp'),
			path.resolve(__dirname, '../../node_modules'),
			'node_modules'
		],
		alias: {
			config: path.resolve(process.cwd(), 'config.js')
		}
	},
	resolveLoader: {
		root: path.resolve(__dirname, '../../node_modules')
	},
	module: {
		loaders: [
			{ test: /\.tpl$/, loader: 'webpack-template-loader'}
		]
	}
};

// if(pkg.es6 && pkg.es6 !== false) {
// 	config.module.loaders.push({
// 		test: /\.js$/,
// 		exclude: /(node_modules|libs|temp)/,
// 		loader: 'babel-loader',
// 		query: pkg.es6
// 	});
// }

var webpackCallback = function(err, stats, showLogs) {
	if(err) {
		throw new Error('[webpack]', err);
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
			console.log('[webpack]', stats.toString({colors: true, chunks: false}));
		}
	}
};

module.exports = {
	development: function() {
		config.devtool = 'eval';
		config.watch = true;

		return webpack(config, function(err, stats) {
			webpackCallback(err, stats, true);
		});
	},

	production: function() {
		config.output.filename = 'dist/' + pkg.version + '/js/application.min.js';

		config.plugins = [
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

		return webpack(config, function(err, stats) {
			webpackCallback(err, stats, false);
			cb();
		});
	}
}