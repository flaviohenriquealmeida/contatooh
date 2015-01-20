angular.module('contatooh', ['ngRoute', 'ngResource', 'meusComponentes'])
  .config(function($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('meuInterceptor');

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'ContatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });

    $routeProvider.when('/contato', {
    	templateUrl: 'partials/contato.html',
    	controller: 'ContatoController'
    });

    $routeProvider.when('/auth', {
      templateUrl: 'partials/auth.html'
    });

    $routeProvider.otherwise({redirectTo: '/contatos'});
    
}).run(function ($rootScope, $location) { //Insert in the function definition the dependencies you need.
    //Do your $on in here, like this:
    $rootScope.$on("$routeChangeStart",function(event, next, current){
        //Do your things
        if(next.templateUrl) {
            ga('send', 'pageview', { page: next.templateUrl });
          __insp.push([next.templateUrl]);
        }
    });
});
