var fs = require('fs-extra'),
	chalk = require('chalk'),
	Github = require('../github'),
	path = require('path');

module.exports = function() {

	var tempFolder = path.join(__dirname, '../../temp'),
		applicationFolder = process.cwd();

	fs.removeSync(tempFolder);

	Github.fetch(tempFolder, function(error, versionFetched) {
		if(error) {
			console.log('\n', chalk.red(error));
		} else {
			process.chdir(tempFolder);

			fs.copySync('assets/css/bootstrap.css', path.join(applicationFolder, 'assets/css/bootstrap.css'));
			fs.copySync('assets/css/boiler.css', path.join(applicationFolder, 'assets/css/boiler.css'));
			fs.copySync('assets/fonts', path.join(applicationFolder, 'assets/fonts'));
			fs.copySync('assets/img/loader.gif', path.join(applicationFolder, 'assets/img/loader.gif'));
			fs.copySync('libs', path.join(applicationFolder, 'libs'));

			console.log(chalk.cyan('\nassets/css/bootstrap.css'), chalk.green('updated!'));
			console.log(chalk.cyan('assets/css/boiler.css'), chalk.green('   updated!'));
			console.log(chalk.cyan('assets/fonts/*'), chalk.green('          updated!'));
			console.log(chalk.cyan('assets/img/loader.gif'), chalk.green('   updated!'));
			console.log(chalk.cyan('libs/*'), chalk.green('                  updated!'));

			console.log(chalk.green('\nApplication updated to Boiler ' + versionFetched + '!'));
		}
	});
};