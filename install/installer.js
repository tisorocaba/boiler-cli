var npmi = require('npmi');
var path = require('path');

module.exports = function(options) {
	console.log('Installing ' + options.name + '@' + options.version + '...');
	npmi(options, function (err, result) {
		if (err) {
			if (err.code === npmi.LOAD_ERR)
				console.log('npm load error');
			else if (err.code === npmi.INSTALL_ERR)
				console.log('npm install error');

			console.log(err.message);
		}
		console.log(options.name + '@' + options.version + ' installed successfully in ' + path.resolve(options.path));
	});
};
