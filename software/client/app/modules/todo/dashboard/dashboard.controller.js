/**
 * Created by semanticbits on 18/8/16.
 */
(function(){
    'use stricts';
    angular.module('toDoApp')
        .controller('dashboardController',dashboardController);
    dashboardController.$inject=['$scope','$rootScope','dashboardService','$uibModal','$timeout'];
    function dashboardController($scope,$rootScope,dashboardService,$uibModal,$timeout){

        var vm=this;
        vm.tasks=[];
        vm.readTasks=readTasks;
        /*Status list for select box*/
        vm.statusList = [
            { name:'Opened' ,value: 'OPENED'},
            { name:'Inprogress', value:'INPROGRESS'},
            { name:'Invalid' ,value:'INVALID'},
            { name:'Completed', value:'COMPLETED'}
        ];
        /*Priority list for multi select box*/
        vm.prioritiesList = [
            { name:'High', value : 'HIGH'},
            { name:'Medium',value : "MEDIUM"},
            { name:'Low',value : "LOW"}
        ];
        /*function for getting tasks from dashboardService*/
        function readTasks() {
            console.log('hi');
            var promise = dashboardService.getTasks();
            promise.then(function (response) {
                $rootScope.allTasks = response;
                vm.tasks = $rootScope.allTasks;
                vm.dataLoaded = true;
            }, function (response) {
                alert('Failed:' + response);
            });


        }
        $timeout( function(){ vm.readTasks(); }, 2000);

        /*vm.readTasks();*/

        $scope.sum=function(a,b){
                return a+b;
        };

    }
}());
