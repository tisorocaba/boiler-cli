#!/usr/bin/env node

var shelljs = require('shelljs'),
	_ = require('underscore'),
	colors = require('colors'),
	Banner = require('./src/banner'),
	tasks = _.keys(require('./src/task-list.json')),
	args = process.argv.slice(2),
	task = args[0],
	boilerPath = __dirname,
	applicationPath = process.cwd();

if(task) {
	if(_.contains(tasks, task)) {
		if(task === 'init' || task === 'update') {
			require('./src/tasks/boiler/' + task)(args[1]);
		} else {
			shelljs.cd(boilerPath);

			if(task === 'start') {
				Banner(boilerPath, applicationPath, false);
				shelljs.exec("gulp --color --applicationPath=" + applicationPath);
			} else {
				shelljs.exec("gulp " + task + " --color --applicationPath=" + applicationPath);
			}
		}
	} else {
		console.log('\nTarefa não encontrada!'.red);
	}
} else {
	Banner(boilerPath, applicationPath, true);
}