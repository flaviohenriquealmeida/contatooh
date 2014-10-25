var fs = require('fs');
var config = require('./config/config')();
var http = require('http');
var express = require('express');
var app = express(); 
console.log(config);
require('./config/express')(app);
require('./config/passport')();
require('./config/database')(config.db); 

http.createServer(app).listen(config.port, config.address, function(){
  console.log('Express Https Server ' 
  	+ config.address 
  	+ ' (' + config.env 
  	+ ') escutando na porta ' + config.port);
});
