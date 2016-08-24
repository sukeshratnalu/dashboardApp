/**
 * Created by semanticbits on 23/8/16.
 */
(function(){
    angular.module('toDoApp')
        .directive('taskDetails',taskDetails);
    taskDetails.$inject=['$uibModal','$rootScope'];
    function taskDetails($uibModal,$rootScope){
        var directive = {
            link: link,
            templateUrl: 'partials/tasks.html',
            restrict: 'EA',
            scope:{
                tasks:'='
            }
        };
        return directive;

        function link(scope) {
            scope.editTask=editTask;
            scope.deleteTasks=deleteTasks;
            scope.markAsComplete=markAsComplete;
            scope.tasks=$rootScope.allTasks;

            //method for changing tasks to complete
            function markAsComplete(id){

                scope.openMarkAsCompleteModal(id);

            }
            //function for delete task
            function  deleteTasks(id){

                scope.openDeleteModal(id);

            }
            //function for editTask
            function editTask(id){
                scope.openEditTaskModal(id);
            }
            /*logic for opening markAsComplete modal*/
            scope.openMarkAsCompleteModal = function (id) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'partials/markAsCompleteModal.html',
                    controller: function ($uibModalInstance) {
                        var cd=this;
                        cd.ok = function () {
                            var markAsCompletedTask=scope.tasks;
                            for(var i=0;i<markAsCompletedTask.length;i++){
                                if(markAsCompletedTask[i].id==id){
                                    markAsCompletedTask[i].status='COMPLETED';
                                    break;
                                }

                            }
                            scope.tasks = markAsCompletedTask;
                            $uibModalInstance.dismiss();
                            /*$uibModalInstance.close(scope.selected.item);*/
                        };
                        cd.cancel = function () {
                            $uibModalInstance.dismiss();
                        };
                    },
                    controllerAs:'cd'

                });
            };
            /*logic for opening delete modal*/
            scope.openDeleteModal=function(id){
                var modalInstance = $uibModal.open({
                    templateUrl:'partials/deleteModal.html',
                    controller: function($uibModalInstance){
                        var cd=this;

                        cd.ok=function(){
                            var deletedTask=scope.tasks;
                            for(var i=0;i<deletedTask.length;i++){
                                console.log("hhhhhhhhhhh");
                                if(deletedTask[i].id==id){
                                    deletedTask.splice(i,1);
                                    break;
                                }
                            }
                            scope.tasks=deletedTask;
                            $uibModalInstance.dismiss();
                        };
                        cd.cancel = function () {
                            $uibModalInstance.dismiss();
                        };
                    },
                    controllerAs:'cd'
                });

            };
            /*logic for opening edit task modal*/
            scope.openEditTaskModal=function(id){
                var modalInstance=$uibModal.open({
                    templateUrl:'partials/editModal.html',
                    controller:function($uibModalInstance){
                        var cd=this;
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
                        cd.editTask={
                            id:'',
                            name:'',
                            description:'',
                            startdate:'',
                            enddate:'',
                            status:{},
                            priority:{}

                        };
                        angular.forEach(scope.tasks,function(task){
                            if(task.id===id){
                                console.log("edit ############");
                                cd.editTask.name=task.name,
                                    cd.editTask.description=task.description,
                                    cd.editTask.startdate=task.startdate,
                                    cd.editTask.enddate=task.enddate,
                                    cd.editTask.status.value=task.status,
                                    cd.editTask.priority.value=task.priority

                            }
                        });
                        cd.submit=function(){
                            angular.forEach(scope.tasks,function(task){
                                if(task.id===id){
                                    task.name=cd.editTask.name,
                                        task.description=cd.editTask.description,
                                        task.startdate=cd.editTask.startdate,
                                        task.enddate=cd.editTask.enddate,
                                        task.status=cd.editTask.status.value,
                                        task.priority=cd.editTask.priority.value
                                }
                            });
                            $uibModalInstance.dismiss();
                        };
                        cd.cancel=function(){
                            $uibModalInstance.dismiss();
                        }

                    },
                    controllerAs:'cd'
                })
            };
        }
    }
}());
