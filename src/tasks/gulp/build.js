var gulp = require('gulp'),
	colors = require('colors'),
	runSequence = require('run-sequence');

module.exports = function(applicationPath) {
	gulp.task('build', function() {
		return runSequence('jshint', 'clean', ['minify-css', 'copy', 'html-replace'], ['helpers', 'webpack-build'], function(err) {
			if(err) {
				console.log('########################################################################################'.red);
				console.log('#                                    FALHA NO BUILD :(                                 #'.red);
				console.log('########################################################################################'.red);
			} else {
				console.log('########################################################################################'.green);
				console.log('#                            BUILD REALIZADO COM SUCESSO :)                            #'.green);
				console.log('########################################################################################'.green);
			}
		});
	});
};