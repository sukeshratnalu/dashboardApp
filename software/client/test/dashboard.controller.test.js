/**
 * Created by semanticbits on 19/8/16.
 */
/**
 * Created by semanticbits on 13/7/16.
 */
describe('dashboardController', function() {
    beforeEach(module('toDoApp'));

    var controller,$scope,mockdashboardService,httpBackend, q,timeout;

    beforeEach(inject(function(_$controller_,$rootScope,_dashboardService_,_$httpBackend_,$q,_$timeout_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        mockdashboardService=_dashboardService_;
        httpBackend = _$httpBackend_;
        q = $q;
        timeout=_$timeout_;
        scope = $rootScope.$new();
        $scope = {};
        controller = $controller('dashboardController', { $scope: $scope,dashboardService:mockdashboardService,$httpBackend:httpBackend,$timeout:timeout});

    }));
    it('Test DashBoardController', inject(function($controller) {
        expect(controller).toBeDefined();
        expect(controller.tasks).toEqual([]);
    }));
    it('testing sum function', function() {
        expect(controller.readTasks).toBeDefined();
        expect($scope.sum(2,3)).toEqual(5);

    });
    it('testing readTasks function',function(){
        expect(controller.readTasks).toBeDefined();
        /*httpBackend.expectGET("data/tasks.json").respond("Response found!");
        httpBackend.flush();*/

    });
    it('check for timeout', function() {
        timeout.flush();
    });



});
