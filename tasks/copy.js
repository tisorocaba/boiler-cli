var gulp = require('gulp');

module.exports = function(applicationPath) {

	var pkg = require(applicationPath('package.json'));

	gulp.task('copy', function() {
		gulp.src(['assets/**', '!assets/css/**']).pipe(gulp.dest('dist/' + pkg.version + '/assets'));
		gulp.src(['config.json']).pipe(gulp.dest('dist/' + pkg.version));
	});
}