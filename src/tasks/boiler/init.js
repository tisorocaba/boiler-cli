var shelljs = require('shelljs'),
	colors = require('colors'),
	fs = require('fs');

module.exports = function(applicationName) {

	var folderIsEmpty = true;

	if(applicationName) {
		folderIsEmpty = fs.existsSync(applicationName) === false;
	} else {
		folderIsEmpty = fs.readdirSync('.').length === 0;
	}

	if(folderIsEmpty) {
		if(shelljs.which('git')) {
			if(applicationName) {
				shelljs.exec("git clone --depth=1 https://github.com/baltazzar/boiler " + applicationName, {silent: true});
			} else {
				shelljs.exec("git clone --depth=1 https://github.com/baltazzar/boiler .", {silent: true});
			}
		} else {
			console.log('git not found! Using volo instead.'.cyan);
			if(applicationName) {
				shelljs.exec("volo create " + applicationName + " baltazzar/boiler");
			} else {
				shelljs.exec("volo install baltazzar/boiler . -f");
			}
		}

		if(applicationName) {
			shelljs.cd(applicationName);
		}

		shelljs.rm('-rf', ['.gitignore', 'LICENSE', 'README.md', '.git']);

		if(applicationName) {
			console.log('\napplication '.green + applicationName.cyan + ' created!'.green);
		} else {
			console.log('\napplication created!'.green);
		}
	} else {
		if(applicationName) {
			console.log('\nthe folder '.red + applicationName.cyan + ' is not empty!'.red);
		} else {
			console.log('\nthe current folder is not empty!'.red);
		}
	}
}