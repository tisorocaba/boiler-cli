var shelljs = require('shelljs'),
	colors = require('colors'),
	fs = require('fs'),
	fetch = require('../../fetch');

module.exports = function(applicationName) {

	var folderIsEmpty = true;

	if(applicationName) {
		folderIsEmpty = fs.existsSync(applicationName) === false;
		shelljs.mkdir('-p', applicationName);
	} else {
		folderIsEmpty = fs.readdirSync('.').length === 0;
	}

	if(folderIsEmpty) {
		fetch(applicationName || '.', function(error, versionFetched) {
			if(error) {
				console.log('\ninit failed! Try again later.'.red);
			} else {
				shelljs.cd(applicationName || '.');
				shelljs.rm('-rf', ['.gitignore', 'LICENSE', 'README.md', '.git']);

				if(applicationName) {
					console.log('\napplication '.green + applicationName.cyan + ' created!'.green);
				} else {
					console.log('\napplication created!'.green);
				}
			}
		});
	} else {
		if(applicationName) {
			console.log('\nthe folder '.red + applicationName.cyan + ' is not empty!'.red);
		} else {
			console.log('\nthe current folder is not empty!'.red);
		}
	}
};