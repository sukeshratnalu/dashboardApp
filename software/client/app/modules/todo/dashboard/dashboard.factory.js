/**
 * Created by semanticbits on 18/8/16.
 */
(function(){
    'use stricts';
    angular.module('toDoApp')
        .factory('dashboardService',dashboardService);
    dashboardService.$inject=['$rootScope','$q','$http'];
    function dashboardService($rootScope,$q,$http){
        var service={
            getTasks:getTasks

        };
        return service;

        function getTasks(){
            return $q(function(resolve){
                $http.get('data/tasks.json',{header:{'Content-Type':'application/json;charset=UTF-8'}}).
                    success(function(response){
                    resolve(response);
                })
            });

        }

    }
}());
