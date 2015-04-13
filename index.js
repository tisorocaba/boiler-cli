#!/usr/bin/env node

var shelljs = require('shelljs'),
	Banner = require('./libs/banner'),
	boilerPath = __dirname,
	applicationPath = process.cwd();

Banner(boilerPath, applicationPath, true);

// shelljs.cd(boilerPath);
// shelljs.exec("gulp " + process.argv[2] + " --appPath " + applicationPath);