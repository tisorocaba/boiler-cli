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

fs.readdirSync('src/tasks/gulp').forEach(function(task) {
	require('./src/tasks/gulp/' + task)(applicationPath);
});