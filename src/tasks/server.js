var browsersync = require('browser-sync').create();

module.exports = function() {
	browsersync.init({
		server: {
			baseDir: process.cwd()
		},
		files: ['temp/application.js', 'assets/**', 'config.json', 'index.html'],
		notify: false,
		ghostMode: false,
		logPrefix: 'Boiler',
		online: false,
		open: false,
		ui: false
	});
};