module.exports = function (app) {

	function verificaAutenticacao(req, res, next) {
	  if (req.isAuthenticated()) {
	    return next();
	  } else {
	    res.status('401').json('Não autorizado');
	  }
	}

	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(verificaAutenticacao, controller.listaTodos)
		.post(verificaAutenticacao, controller.salvaContato);

	app.route('/contatos/:id')
		.get(verificaAutenticacao, controller.obtemContato)
		.delete(verificaAutenticacao, controller.removeContato);
};