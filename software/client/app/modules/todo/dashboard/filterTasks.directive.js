/**
 * Created by semanticbits on 23/8/16.
 */
(function(){
    angular.module('toDoApp')
        .directive('filterTasks',filterTasks);
    filterTasks.$inject=['$rootScope'];
    function filterTasks($rootScope){
        var directive = {
            link: link,
            templateUrl: 'partials/filterTask.html',
            restrict: 'EA',
            scope:{
                tasks:'=',
                statusList:'=',
                prioritiesList:'='
            }
        };
        return directive;

        function link(scope) {
            scope.tasks=[];
            scope.selectedStatus = {};
            scope.selectedPriority=[];
            scope.selectedPriority.selected={};
            scope.filterTasks=filterTasks;
            /*function for filtering tasks*/
            function filterTasks(){
                console.log("##################################");
                scope.tasks=[];
                var filteringTasks=[];
                var unFilteredTasks=$rootScope.allTasks;
                var status=undefined;
                var priorities=undefined;
                if(scope.selectedStatus.value){
                    status=scope.selectedStatus.value;

                    console.log(status.value);
                }
                if(scope.selectedPriority.selected.length>0){
                    priorities=[];
                    angular.forEach(scope.selectedPriority.selected, function(priority){
                        priorities.push(priority.value);
                        console.log(priorities);
                    })
                }
                console.log(priorities);
                angular.forEach(unFilteredTasks, function(task){
                    if(status&&priorities&&task.status===status.value&&priorities.indexOf(task.priority) !== -1){
                        filteringTasks.push(task);
                    }else if(!priorities&&status&&task.status===status.value){
                        filteringTasks.push(task);
                    }else if(!status&&priorities&&priorities.indexOf(task.priority) !== -1){
                        filteringTasks.push(task);
                    }
                });
                if(status||priorities){
                    scope.tasks=filteringTasks;
                }else{
                    scope.tasks=$rootScope.allTasks;
                }
            }
        }
    }
}());
