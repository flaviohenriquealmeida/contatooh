var mongoose = require('mongoose');

module.exports = function(uri) {
	
	mongoose.connect(uri, { server: { poolSize: 15 }});
	mongoose.connection.on('connected', function () {
	  console.log('Mongoose! Connectado em ' + uri);
	});

	mongoose.connection.on('error',function (err) {
	  console.log('Mongoose! Erro na conexão: ' + err);
	});

	mongoose.connection.on('disconnected', function () {
	  console.log('Mongoose! Desconectado de ' + uri);
	});

	process.on('SIGINT', function() {
	  mongoose.connection.close(function () {
	    console.log('Mongoose! Desconectado pelo término aplicação');
	    process.exit(0);
	  });
	});
}