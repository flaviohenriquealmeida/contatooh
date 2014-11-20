var passport = require('passport');

module.exports = function(app) {
	
	app.get('/', function(req, res, next) {
		if(req.isAuthenticated()) {
			return next();
		} else {
			 //res.sendfile('auth.html', {root: './public'});
			res.render("auth");	
		}	
	});

	app.get('/logout', function(req, res) {
	  req.logOut(); // exposto pelo passport
	  res.redirect('/');
	});

	app.get('/auth/github', function() {
		console.log("####### joga para github");
		return passport.authenticate('github');
	});
	app.get('/auth/github/callback', passport.authenticate('github', {
		successRedirect: '/'
	}));
}