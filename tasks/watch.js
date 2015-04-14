var gulp = require('gulp');

module.exports = function(applicationPath) {
	gulp.task('watch', function() {
		gulp.watch([applicationPath('application/helpers/**/*')], ['helpers']);
		gulp.watch([applicationPath('application/templates/**/*')], ['partials']);
	});
}