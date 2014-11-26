module.exports = function(app) {
	app.get('/', function(req, res) {
		
		//console.log(req.user);
		//res.render('index', { "usuarioLogado" : req.user.nome});
		res.render('index', { "usuarioLogado" : 'teste'});
	});
};