var npm = require('npm');

// module.exports = function(applicationName) {

// TODO verify npmi module
npm.load({
	loaded: false
}, function(err) {
	console.log('err in load is:');
	console.log(err);

	npm.commands.ls({global: true}, function(cb) {
		console.log('cb is: ');
		console.log(cb);
		
		// console.log('data is: ');
		// console.log(data);

		// if (data == 'volo')
		// 	console.log('Skip volo');
		// else
		// 	npm.command.install('volo');

		// if (data == 'gulp')
		// 	console.log('Skip volo');
		// else
		// 	npm.command.install('gulp');
		
	});
});

// };
