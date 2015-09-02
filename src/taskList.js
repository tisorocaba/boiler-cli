var chalk = require('chalk');

module.exports = {
	'init'   : 'creates a brand new application',
	'update' : 'updates boiler.js',
	'build'  : 'prepares the application for production',
	'clean'  : 'cleans the ' + chalk.white('dist/<version>') + ' folder',
	'lint'   : 'looks for errors in the application code',
	'start'  : 'starts a server for development and watch for changes'
};