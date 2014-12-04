describe('meusComponentes', function() {

	var $compile;
	var $scope;

	beforeEach(function() {
		module('meusComponentes');
		module('templates');
	});

	beforeEach(inject(function(_$compile_, $rootScope) {
		// não pode usar module quando usa $injector
		$compile = _$compile_;
		$scope = $rootScope.$new();
	}));

	it('deve criar um botão de aviso', function() {
		var element = angular.element('<meu-botao-aviso nome="Remover" acao="remove()">');
		var compiled = $compile(element)($scope);
		$scope.$digest();
		expect(compiled.text()).toContain('Remover');
		expect(compiled.attr('acao')).toBe('remove()');
	});

	it('Deve focar o botão', function() {
		var evento = 'contatoSalvo';
		var element = angular.element('<button meu-focus evento="' + evento + '">Voltar</button>');
		var compiled = $compile(element)($scope);
		angular.element(document.body).append(element);
		$scope.$broadcast(evento);
		$scope.$digest();
		expect(angular.element(document.activeElement).text()).toBe('Voltar');
	});



	it('Deve criar um painel', function() {
		var element = angular.element('<meu-painel titulo="Principal"><p>Olá</p></meu-painel>');
		var compiled = $compile(element)($scope);
		console.log(compiled);
		$scope.$digest();
	});


	// terceiro é o problemático do template cache
});