var colors = require('colors'),
	_ = require('underscore'),
	tasks = require('./task-list.json'),
	pkg = require('../package.json');

module.exports = function(boilerPath, applicationPath, showTasks) {
	var banner = [
		' ___    ___    ___   _      ___   ___ ',
		'| _ )  / _ \\  |_ _| | |    | __| | _ \\',
		'| _ \\ | (_) |  | |  | |__  | _|  |   /',
		'|___/  \\___/  |___| |____| |___| |_|_\\ ' + pkg.version.green,
		'',
		'Boiler Path      = '.gray + boilerPath.cyan,
		'Application Path = '.gray + applicationPath.cyan,
		''
	].join('\n').gray;

	console.log(banner);

	if(showTasks) {

		console.log('TASKS'.white, '\n');

		_(tasks).each(function(description, task) {
			console.log(task.cyan, description.gray);
		});

		console.log('\n');
	}
}