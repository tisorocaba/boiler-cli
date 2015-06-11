var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

module.exports = function(applicationPath) {

	var pkg = require(applicationPath('package.json'));

	gulp.task('minify-css', function() {
		return gulp.src(applicationPath('assets/css/main.css'))
			.pipe(plugins.minifyCss({keepSpecialComments:0}))
			.pipe(plugins.rename('application.min.css'))
			.pipe(gulp.dest(applicationPath('dist/' + pkg.version + '/assets/css')));
	});
};