var gulp = require('gulp'),
	browsersync = require('browser-sync'),
	path = require("path");

module.exports = function(appPath) {
	gulp.task('server', function() {
		browsersync({
			server: {
				baseDir: appPath()
			},
			files: [appPath('temp/application.js'), appPath('assets/**'), appPath('config.json'), appPath('index.html')],
			notify: false,
			ghostMode: false,
			logPrefix: 'Boiler',
			online: false,
			open: false
		});
	});
};