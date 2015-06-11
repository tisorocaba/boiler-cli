var gulp = require('gulp'),
	glob = require('glob'),
	fs = require('fs-extra');

module.exports = function(applicationPath) {
	gulp.task('helpers', function() {
		var helpers = glob.sync(applicationPath('application/helpers/**/*.js')).map(function(file) {
			return "require('" + file.split('application/')[1].replace('.js', '') + "');";
		});

		fs.outputFileSync(applicationPath('temp/helpers.js'), helpers.join('\n'));
	});
};