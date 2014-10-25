var config;
module.exports = function() {
	if(!config)
		config = require('./env/' + (process.env.NODE_ENV || 'development') + '.js');
	return config;
}