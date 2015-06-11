var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

module.exports = function(applicationPath) {
	gulp.task('jshint', function() {
		return gulp.src([applicationPath('application/**/*.js'), applicationPath('libs/boiler.js')])
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter('jshint-stylish'))
			.pipe(plugins.jshint.reporter('fail'));
	});
};