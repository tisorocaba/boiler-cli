#!/usr/bin/env node

var logger = require('../libs/boilerLogger'),
	shelljs = require('shelljs');

var boilerPath = __dirname;
var applicationPath = process.cwd();

logger.custom(["Boiler Path = ", "white"] , [boilerPath, "gray"]);
logger.custom(["Application Path = ", "white"] , [applicationPath, "gray"]);

shelljs.cd(boilerPath);
shelljs.exec("gulp " + process.argv[2] + " --appPath " + applicationPath);