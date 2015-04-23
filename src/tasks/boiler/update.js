var shelljs = require('shelljs'),
	colors = require('colors'),
	request = require('request'),
	github = require('transfer-github'),
	path = require('path');

module.exports = function() {

	var tempFolder = path.join(__dirname, '../../../temp'),
		applicationFolder = process.cwd(),
		options = {
			url: 'https://api.github.com/repos/baltazzar/boiler/releases/latest',
			headers: {
				'User-Agent': 'boiler-cli'
			}
		};

	shelljs.rm('-rf', tempFolder);

	request(options, function(error, response, body) {
		if(error) {
			console.log('\nupdate failed! Try again later.'.red);
		} else {
			var latestVersion = JSON.parse(body).tag_name;

			github.get('baltazzar/boiler#' + latestVersion, tempFolder, function(error) {
				if(error) {
					console.log('\nupdate failed! Try again later.'.red);
				} else {
					shelljs.cd(tempFolder);

					shelljs.cp('-rf', ['assets/css/bootstrap.css', 'assets/css/boiler.css'], path.join(applicationFolder, 'assets/css'));
					shelljs.cp('-rf', ['assets/fonts/'], path.join(applicationFolder, 'assets/fonts'));
					shelljs.cp('-rf', ['assets/img/loader.gif'], path.join(applicationFolder, 'assets/img'));
					shelljs.cp('-rf', ['libs/*'], path.join(applicationFolder, 'libs'));

					console.log('\napplication updated to boiler '.green + latestVersion.green + '!'.green);
				}
			});
		}
	});
}