var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

module.exports = function(applicationPath) {

	var pkg = require(applicationPath('package.json'));

	gulp.task('html-replace', function() {
		return gulp.src(applicationPath('index.html'))
				.pipe(plugins.frep({'@@versao': pkg.version}))
				.pipe(plugins.processhtml())
				.pipe(gulp.dest(applicationPath('dist/' + pkg.version)));
	});
};