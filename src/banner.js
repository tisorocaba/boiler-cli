var chalk = require('chalk'),
	pkg = require('../package.json'),
	taskList = require('./taskList'),
	banner = chalk.green([
		' ___    ___    ___   _      ___   ___ ',
		'| _ )  / _ \\  |_ _| | |    | __| | _ \\',
		'| _ \\ | (_) |  | |  | |__  | _|  |   /',
		'|___/  \\___/  |___| |____| |___| |_|_\\ ' + chalk.green(pkg.version),
		''
	].join('\n'));

module.exports = {
	show: function() {
		console.log(banner);
		return this;
	},

	showPath: function() {
		console.log(chalk.gray('Application path: ') + chalk.cyan(process.cwd()), '\n');
		return this;
	},

	showTaskList: function() {
		console.log(chalk.white('TASKS'), '\n');

		for(task in taskList) {
			console.log(chalk.cyan(task), '\t', chalk.gray(taskList[task]));
		}

		return this;
	}
};