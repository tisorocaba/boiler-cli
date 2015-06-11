var shelljs = require('shelljs'),
	colors = require('colors'),
	fetch = require('../../fetch'),
	path = require('path');

module.exports = function() {

	var tempFolder = path.join(__dirname, '../../../temp'),
		applicationFolder = process.cwd();

	shelljs.rm('-rf', tempFolder);

	fetch(tempFolder, function(error, versionFetched) {
		if(error) {
			console.log('\nupdate failed! Try again later.'.red);
		} else {
			shelljs.cd(tempFolder);

			shelljs.cp('-rf', ['assets/css/bootstrap.css', 'assets/css/boiler.css'], path.join(applicationFolder, 'assets/css'));
			shelljs.cp('-rf', ['assets/fonts/'], path.join(applicationFolder, 'assets/fonts'));
			shelljs.cp('-rf', ['assets/img/loader.gif'], path.join(applicationFolder, 'assets/img'));
			shelljs.cp('-rf', ['libs/*'], path.join(applicationFolder, 'libs'));

			console.log('\nassets/css/bootstrap.css'.cyan, 'updated!'.green);
			console.log('assets/css/boiler.css'.cyan, '   updated!'.green);
			console.log('assets/fonts/*'.cyan, '          updated!'.green);
			console.log('assets/img/loader.gif'.cyan, '   updated!'.green);
			console.log('libs/*'.cyan, '                  updated!'.green);

			console.log('\napplication updated to boiler '.green + versionFetched.green + '!'.green);
		}
	});
};