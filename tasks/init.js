var shelljs = require('shelljs'),
	colors = require('colors');

module.exports = function(applicationName) {
	if(shelljs.which('git')) {
		if(applicationName) {
			shelljs.exec("git clone https://github.com/baltazzar/boiler " + applicationName, {silent: true});
		} else {
			shelljs.exec("git clone https://github.com/baltazzar/boiler .", {silent: true});
		}
	} else {
		if(applicationName) {
			shelljs.exec("volo create " + applicationName + " baltazzar/boiler");
		} else {
			shelljs.exec("volo install baltazzar/boiler . -f");
		}
	}

	if(applicationName) {
		shelljs.cd(applicationName);
	}

	shelljs.rm('-rf', ['.gitignore', 'LICENSE', 'README.md', 'gulpfile.js', '.git']);

	if(applicationName) {
		console.log('\napplication '.green + applicationName.cyan + ' created!'.green);
	} else {
		console.log('\napplication created'.green);
	}
}