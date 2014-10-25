
// autenticação 
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');
var config = require('./config')();
module.exports = function() {
	var githubCallback = 'http://' + config.domain + '/auth/github/callback';
	
	var Usuario = mongoose.model('Usuario');

		passport.use(new GitHubStrategy({
		clientID: config.clientID,
		clientSecret: config.clientSecret,
		callbackURL: githubCallback
	}, function(accessToken, refreshToken, profile, done) {
		Usuario.findOrCreate(
			{ "login" : profile.username}, 
			{ "nome" : profile.username},  
			function(erro, usuario) {
				if(erro) {
					console.log(erro);
					return done(erro);
				} 
				return done(null, usuario);
			}
		);
	}));

	passport.serializeUser(function(usuario, done) {
	  done(null, usuario._id);
	});
	 
	passport.deserializeUser(function(id, done) {
	  Usuario.findById(id).exec()
	  .then(function(usuario) {
	  	done(null, usuario);	
	  });
	});
};