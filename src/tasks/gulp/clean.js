var gulp = require('gulp'),
	del = require('del');

module.exports = function(applicationPath) {

	var pkg = require(applicationPath('package.json'));

	gulp.task('clean', function(cb) {
		return del([applicationPath('dist/' + pkg.version)], {force: true}, cb);
	});
};