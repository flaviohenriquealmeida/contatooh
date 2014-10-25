
describe("ContatoController", function() {
	var $scope, $httpBackend;

	// será executado antes de cada teste.
	beforeEach(function() {

		// precisa carregar o módulo
		module('contatooh');
		// criará um escopo do controller antes de cada chamada de teste
		inject(function($injector, _$httpBackend_){
			// guarda uma variável para podemos referenciá-la depois
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = _$httpBackend_;
			
			// diferença entre when e expect ???
			$httpBackend.when('GET', '/contatos/1')
                            .respond({_id: '1'});
			$httpBackend.when('GET', '/contatos')
                            .respond([{}]);
		});
	});

	it("Deve criar um Contato vazio quando nenhum parâmetro de rota for passado", inject(function($controller) {
		$controller('ContatoController', {
			'$scope': $scope
		});
		// se está vazio, não possui _id ainda
		expect($scope.contato._id).toBeUndefined();
	}));

/*

1
down vote
accepted
When you have promises that need to be resolved (indicated by the .then() on your Restangular call) you need to call $scope.$digest() after your $httpBackend.flush() to resolve them. This also sounds like perhaps your Restangular call is hitting the actual server instead of a mock, which would be what is causing you to need the timeout.
*/
	it("Deve preencher o objeto Contato quando parâmetro de rota for passado", inject(function($controller) {
		// tiver que mokar... porque é chamado se o routeParam for passado
		$controller('ContatoController', {
			$routeParams: {contatoId: 1},
			'$scope': $scope
		});
		$httpBackend.flush();
		expect($scope.contato._id).toBeDefined();
	}));

});

// a ideia aqui é usar o $httpmock para substituir o hack do Contato.get


/*
describe("ContatoController", function() {
	var ctrlScope;

	// será executado antes de cada teste.
	beforeEach(function() {

		// precisa carregar o módulo
		module('contatooh');
		// criará um escopo do controller antes de cada chamada de teste
		inject(function($injector){
			// guarda uma variável para podemos referenciá-la depois
			ctrlScope = $injector.get('$rootScope').$new();
		});
	});

	it("Deve criar um Contato vazio quando nenhum parâmetro de rota for passado", inject(function($controller) {
		$controller('ContatoController', {
			$scope: ctrlScope
		});
		// se está vazio, não possui _id ainda
		expect(ctrlScope.contato._id).toBeUndefined();
	}));

	it("Deve preencher o objeto Contato quando parâmetro de rota for passado", inject(function($controller, Contato) {
		// tiver que mokar... porque é chamado se o routeParam for passado
		Contato.get = function() {
			ctrlScope.contato = {_id: 1};
		};

		$controller('ContatoController', {
			$routeParams: {contatoId: 1},
			$scope: ctrlScope
		});

		expect(ctrlScope.contato._id).not.toBeUndefined();
	}));

});

// a ideia aqui é usar o $httpmock para substituir o hack do Contato.get






*/



