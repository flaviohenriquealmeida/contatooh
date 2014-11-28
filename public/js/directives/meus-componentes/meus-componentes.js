angular.module('meusComponentes', [])
.directive('meuPainel', function() {

  var directive = {}

  directive.restrict = 'EA';

  directive.scope = {
    titulo: '@'
  };

  directive.transclude = true;

  directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html';

  return directive;
})
.directive('meuBotaoAviso', function() {

    var directive = {}

    directive.restrict = 'E';

    directive.scope = {
      nome : '@',
      acao : '&'
    };

    directive.template = 
      '<button ng-click="acao()" class="btn btn-warning">'
    	+ '{{nome}}'
    + '</buttom>';
    
    return directive;
})
.directive('meuFocus', function() {
    var directive = {};
    
    directive.restrict = 'A';
    
    directive.scope = {
      focus: '=focus'
    };

    directive.link = function(scope, element) {
      scope.$watch('focus', function() {
        console.log('chamou watch');
        if (scope.focus) {
          console.log(element);
          element[0].focus();
        } 
      });
    };

    return directive;
});