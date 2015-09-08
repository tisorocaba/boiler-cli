var glob = require('glob'),
	fs = require('fs-extra');

module.exports = function() {
	var partials = ["var Handlebars = require('handlebars/runtime')['default'];\n"];

	glob.sync('application/templates/**/*.tpl').forEach(function(file) {
		if(file.indexOf('/_') !== -1) {
			file = file.split('application/')[1];
			partials.push("Handlebars.registerPartial('" + file + "', require('" + file + "'));");
		}
	});

	fs.outputFileSync('temp/partials.js', partials.join('\n'));
};