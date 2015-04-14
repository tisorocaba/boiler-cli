var gulp = require('gulp'),
	browsersync = require('browser-sync');

module.exports = function(applicationPath) {
	gulp.task('server', function() {
		browsersync({
			server: {
				baseDir: applicationPath()
			},
			files: [
				applicationPath('temp/application.js'),
				applicationPath('assets/**'),
				applicationPath('config.json'),
				applicationPath('index.html')
			],
			notify: false,
			ghostMode: false,
			logPrefix: 'Boiler',
			online: false,
			open: false
		});
	});
};