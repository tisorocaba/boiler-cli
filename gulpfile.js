var fs = require('fs'),
	logger = require('./libs/boilerlogger'),
	minimist = require('minimist'),
	path = require('path');

var args = minimist(process.argv.slice(2), {
	string : ["appPath"],
	default: { appPath: null }
});

var appPath = function(filePath) {
	if(filePath) {
		return path.join(args.appPath, filePath)
	} else {
		return args.appPath;
	}
};

fs.readdirSync('tasks').forEach(function(task) {
	require('./tasks/' + task)(appPath);
});
