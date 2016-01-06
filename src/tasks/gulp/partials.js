var gulp = require('gulp'),
	glob = require('glob'),
	fs = require('fs-extra');

module.exports = function(applicationPath) {
	gulp.task('partials', function() {
		var partials = ["var Handlebars = require('handlebars/runtime')['default'];\n"];
		var re = /application\/(.+)$/i;

		glob.sync(applicationPath('application/templates/**/*.tpl')).forEach(function(file) {
			if(file.indexOf('/_') !== -1) {
				file = re.exec(file)[1];

				partials.push("Handlebars.registerPartial('" + file + "', require('" + file + "'));");
			}
		});

		fs.outputFileSync(applicationPath('temp/partials.js'), partials.join('\n'));
	});
};