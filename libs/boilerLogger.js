var plugins = require('gulp-load-plugins')();

module.exports = {

	information: function(message) {
		plugins.util.log(plugins.util.colors.gray(message));
	},

	success: function(message) {
		plugins.util.log(plugins.util.colors.green(message));
	},
	
	warning: function(message) {
		plugins.util.log(plugins.util.colors.cyan(message));
	},

	error: function(message) {
		plugins.util.log(plugins.util.colors.red(message));
	},

	custom: function() {
		var message = "";
		for (i=0; i<arguments.length; i++) {
			message += plugins.util.colors[arguments[i][1]](arguments[i][0]);
		}
		plugins.util.log(message);
	}
}