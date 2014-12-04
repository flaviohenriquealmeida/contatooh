angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, Contato, $rootScope) {
	
	Contato.query(function(contatos) {
		console.log("Chamou lista de contatos");
		$scope.contatos = contatos;
	});
		
	if($routeParams.contatoId) {
		console.log('Passou parâmetro ' + $routeParams.contatoId);
		Contato.get({id: $routeParams.contatoId}, 
			function(contato) {
				console.log("Achou contato: " + contato);
				$scope.contato = contato;
			}, 
			function(erro) {
				console.log(erro);
				$scope.mensagem = {texto: 'Contato não existe. Novo contato.'};
			}
		);	
	} else {
		console.log("Cria novo contato");
		$scope.contato = new Contato();
	}

	$scope.salva = function() {
		
		$scope.contato.$save()
		.then(function() {
			$scope.mensagem = {texto: 'Salvo com sucesso'};
			$scope.contato = new Contato();
			$scope.$broadcast('contatoSalvo');
		})
		.catch(function(erro) {
  			$scope.mensagem = {texto: 'Não foi possível salvar'};
  		});
	};

});