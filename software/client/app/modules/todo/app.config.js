/**
 * Created by semanticbits on 18/8/16.
 */
(function(){
    angular.module('toDoApp')
        .config(function($stateProvider, $urlRouterProvider,$locationProvider){
            $urlRouterProvider.otherwise('/dashboard');
            $stateProvider
                .state('dashboard',{
                    url: '/',
                    templateUrl: 'partials/dashboard.html',
                    controller:'dashboardController',
                    controllerAs:'vm'
                });
            $locationProvider.html5Mode(true);
        })
}());
