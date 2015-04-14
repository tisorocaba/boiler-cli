var fs = require('fs'),
	minimist = require('minimist'),
	path = require('path'),
	args = minimist(process.argv.slice(2));

var applicationPath = function(filePath) {
	if(filePath) {
		return path.join(args.applicationPath, filePath)
	} else {
		return args.applicationPath;
	}
};

fs.readdirSync('tasks').forEach(function(task) {
	if(task !== 'template-loader.js') {
		require('./tasks/' + task)(applicationPath);
	}
});