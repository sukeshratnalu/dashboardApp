/**
 * Created by semanticbits on 23/8/16.
 */
(function(){
    angular.module('toDoApp')
        .directive('addTask',addTask);
    addTask.$inject=['$uibModal'];
    function addTask($uibModal){
        var directive = {
            link: link,
            templateUrl: 'partials/addTask.html',
            restrict: 'EA',
            scope:{
                tasks:'='
            }
        };
        return directive;
        function link(scope) {
            scope.addTasks=addTasks;
            scope.tasks=[];
            /*functions for addTasks*/
            function  addTasks(){
                console.log('hi..................');
                scope.openAddTaskModal();
            }
            /*logic for addTask modal*/
             scope.openAddTaskModal=function(){
                var modalInstance = $uibModal.open({
                    templateUrl:'partials/addTaskModal.html',
                    controller: function($uibModalInstance){
                        var cd=this;
                        var count=0;
                        cd.statusList = [
                            { name:'Opened' ,value: 'OPENED'},
                            { name:'Inprogress', value:'INPROGRESS'},
                            { name:'Invalid' ,value:'INVALID'},
                            { name:'Completed', value:'COMPLETED'}
                        ];
                        cd.prioritiesList = [
                            { name:'High', value : 'HIGH'},
                            { name:'Medium',value : "MEDIUM"},
                            { name:'Low',value : "LOW"}
                        ];
                        angular.forEach(scope.tasks,function(task){
                            count++;
                        });
                        count=count+1;
                        console.log(count);
                        cd.newTask={
                            id:'',
                            name:'',
                            description:'',
                            startdate:'',
                            enddate:'',
                            status:'',
                            priority:''
                        };
                        cd.submit=function(){
                            var addTask={
                                id:count.toString(),
                                name:cd.newTask.name,
                                description:cd.newTask.description,
                                startdate:cd.newTask.startdate,
                                enddate:cd.newTask.enddate,
                                status:cd.newTask.status.value,
                                priority:cd.newTask.priority.value
                            };
                            scope.tasks.push(addTask);
                            console.log(cd.newTask.id);
                            $uibModalInstance.dismiss();
                        };
                        cd.cancel = function () {
                            $uibModalInstance.dismiss();
                        };
                    },
                    controllerAs:'cd'
                });
             }
        }
    }
}());
