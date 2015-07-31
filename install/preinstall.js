var installer = require('./installer'),
	volo = {name: 'volo', version: 'latest', path: '.', forceInstall: false},
	gulp = {name: 'gulp', version: 'latest', path: '.', forceInstall: false}
;

installer(volo);
installer(gulp);
