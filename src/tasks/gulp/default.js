var gulp = require('gulp'),
	runSequence = require('run-sequence');

module.exports = function(applicationPath) {
	gulp.task('default', function() {
		return runSequence(['helpers', 'partials', 'webpack'], ['server', 'watch']);
	});
}