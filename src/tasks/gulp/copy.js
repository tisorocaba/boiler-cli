var gulp = require('gulp');

module.exports = function(applicationPath) {

	var pkg = require(applicationPath('package.json'));

	gulp.task('copy', function() {
		gulp.src([applicationPath('assets/**'), '!' + applicationPath('assets/css/**')]).pipe(gulp.dest(applicationPath('dist/' + pkg.version + '/assets')));
		gulp.src([applicationPath('config.json')]).pipe(gulp.dest(applicationPath('dist/' + pkg.version)));
	});
};