var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser'); 
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
// https://github.com/evilpacket/helmet
var helmet  = require('helmet')

module.exports = function() {
	var app = express();
	
	app.set('port', 3000);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(express.static('./public'));
	
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	app.use(cookieParser());
	app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

	app.use(passport.initialize());
	app.use(passport.session());

	// app.use(helmet()); padrão 
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	app.use(helmet.nosniff());
	app.use(helmet.ienoopen());
	app.disable('x-powered-by');
	
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes/auth.js')
		.then('routes')
		.into(app);
	
	app.get('*', function(req, res) {
		res.status(404).render('404');
	});

	return app;
};