#!/usr/bin/env node

var shelljs = require('shelljs'),
	_ = require('underscore'),
	colors = require('colors'),
	Banner = require('./libs/banner'),
	tasks = _.keys(require('./libs/tasks.json')),
	args = process.argv.slice(2),
	task = args[0],
	boilerPath = __dirname,
	applicationPath = process.cwd();

if(task) {
	if(_.contains(tasks, task)) {
		if(task === 'init') {

		} else if(task === 'update') {

		} else {
			shelljs.cd(boilerPath);

			if(task === 'start') {
				Banner(boilerPath, applicationPath, false);
				shelljs.exec("gulp --applicationPath=" + applicationPath);
			} else {
				shelljs.exec("gulp " + task + " --applicationPath=" + applicationPath);
			}
		}
	} else {
		console.log('\ntask not found!'.red);
	}
} else {
	Banner(boilerPath, applicationPath, true);
}