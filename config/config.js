var nconf = require('nconf');

nconf.argv()
	.env()
	.file({
		file: process.cwd() + 'config/env/config.json'
	});

module.exports = nconf;