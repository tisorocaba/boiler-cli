var request = require('request'),
	github = require('transfer-github');

module.exports = function(destFolder, cb) {

	var options = {
			url: 'https://api.github.com/repos/baltazzar/boiler/releases/latest',
			headers: {
				'User-Agent': 'boiler-cli'
			}
		};

	request(options, function(error, response, body) {
		if(error) {
			cb(error, null);
		} else {
			var latestVersion = JSON.parse(body).tag_name;

			github.get('baltazzar/boiler#' + latestVersion, destFolder, function(error) {
				cb(error, latestVersion);
			});
		}
	});
}