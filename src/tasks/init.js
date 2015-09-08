var fs = require('fs'),
	chalk = require('chalk'),
	Github = require('../github'),
	applicationPath = process.argv.slice(2)[1] || '.';

module.exports = function() {
	var isEmpty = true;

	if(applicationPath === '.') {
		isEmpty = fs.readdirSync(applicationPath).length === 0;
	} else {
		isEmpty = fs.existsSync(applicationPath) === false;
	}

	if(isEmpty) {
		Github.fetch(applicationPath, function(error, versionFetched) {
			if(error) {
				console.log('\n', chalk.red(error));
			} else {
				if(applicationPath === '.') {
					console.log('\n', chalk.green('Application created!'));
				} else {
					console.log('\n', chalk.green('Application ' + chalk.cyan(applicationPath) + ' created!'));
				}
			}
		});
	} else {
		if(applicationPath === '.') {
			console.log('\n', chalk.red('The current folder is not empty!'));
		} else {
			console.log('\n', chalk.red('The folder ' + chalk.cyan(applicationPath) + ' already exists!'));
		}
	}
};