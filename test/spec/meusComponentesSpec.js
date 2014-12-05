describe('meuBotaoAviso', function() {

	var $scope;
	var element;

	beforeEach(function() {
		module('meusComponentes');
		inject(function($compile, $rootScope) {
			$scope = $rootScope.$new();
			element = angular.element('<meu-botao-aviso nome="Remover" acao="remove()">');
			$compile(element)($scope);
			$scope.$digest();
		});
	});

	it('deve criar um botão de aviso', function() {
		
		expect(element.text()).toContain('Remover');
		expect(element.attr('acao')).toBe('remove()');
	});
});

describe('meuFocus', function() {

	var $scope;
	var element;
	var evento = "contatoSalvo";

	beforeEach(function() {
		module('meusComponentes');
		inject(function($compile, $rootScope) {

			$scope = $rootScope.$new();
			element = angular.element('<button meu-focus evento="' + evento + '">Voltar</button>');
			$compile(element)($scope);
			$scope.$digest();
		});
	});

	it('Deve focar o botão', function() {
		angular.element(document.body).append(element);
		$scope.$broadcast(evento);
		expect(angular.element(document.activeElement).text()).toBe('Voltar');
	});

});

describe('meuPainel', function() {

	var $scope;
	var element;

	beforeEach(function() {
		module('meusComponentes');
		module('templates');
		inject(function($compile, $rootScope) {
			$scope = $rootScope.$new();
			element = angular.element('<meu-painel titulo="Principal"><p>Oi</p></meu-painel>');
			$compile(element)($scope);
			$scope.$digest();
		});
	});

	it('Deve criar um painel', function() {
		expect(element.find('h3').text()).toContain('Principal');
		expect(element.find('p').text()).toContain('Oi');
	});

});