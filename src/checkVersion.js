var shelljs = require('shelljs'),
	pkg = require('../package.json'),
	latestVersion = shelljs.exec('npm show ' + pkg.name + ' version', {silent: true}).output.replace(/\n/g, '');

module.exports = function() {
	if(pkg.version !== latestVersion) {
		console.log('your current version is outdated. Run'.yellow, 'npm install -g'.cyan, pkg.name.cyan, 'to update!'.yellow, '\n');
	}
}