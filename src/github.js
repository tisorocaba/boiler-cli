var	fs = require('fs-extra'),
	request = require('request'),
	path = require('path'),
	Unzipper = require('decompress-zip');

module.exports = {
	fetch: function(applicationPath, cb) {
		var options = {
				url: 'https://api.github.com/repos/baltazzar/boiler/releases/latest',
				headers: {
					'User-Agent': 'boiler-cli'
				}
			};

		if(applicationPath !== '.') {
			fs.mkdirpSync(applicationPath);
			process.chdir(applicationPath);
		}

		request(options, function(error, response, body) {
			if(error) {
				cb(error);
			} else {
				var latestVersion = JSON.parse(body).tag_name,
					zipUrl = 'https://nodeload.github.com/baltazzar/boiler/zip/' + latestVersion,
					zipDir = 'boiler-' + latestVersion,
					zipFile = zipDir + '.zip',
					unzipper = new Unzipper(zipFile);

				request(zipUrl).pipe(fs.createWriteStream(zipFile)).on('close', function() {
					unzipper.extract({
						path: process.cwd(),
						filter: function(file) {
							var blacklist = ['.gitignore', 'LICENSE', 'README.md', '.git']

							if(blacklist.indexOf(file.filename) === -1) {
								return file;
							}
						}
					})
					.on('error', cb)
					.on('extract', function() {
						fs.removeSync(zipFile);
						fs.move(zipDir, process.cwd(), function(error) {
							if(error) {
								cb(error);
							} else {
								cb(null, latestVersion);
							}
						});
					});
				});
			}
		});
	}
};