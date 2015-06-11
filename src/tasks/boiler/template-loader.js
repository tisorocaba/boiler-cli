var Handlebars = require('handlebars');

module.exports = function(source) {
	this.cacheable();

	var callback = this.async();

	callback(null, [
		"var Handlebars = require('handlebars/runtime');",
		"module.exports = Handlebars.template(" + Handlebars.precompile(source) + ");"
	].join('\n'));
};