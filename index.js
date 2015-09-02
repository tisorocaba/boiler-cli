#!/usr/bin/env node

var chalk = require('chalk'),
	task = process.argv.slice(2)[0],
	Banner = require('./src/banner');

if(task) {
	try {
		return require('./src/tasks/' + task)();
	} catch(err) {
		console.log('\n', chalk.red('Task ' + chalk.cyan(task) + ' not found!'));
	}
} else {
	Banner.show().showPath().showTaskList();
}