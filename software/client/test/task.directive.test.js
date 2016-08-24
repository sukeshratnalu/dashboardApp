/**
 * Created by semanticbits on 23/8/16.
 */
describe('directive: task-details', function() {
    var element, scope;

    beforeEach(module('toDoApp'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        element =
            '<task-details></task-details>';

        element = $compile(element)(scope);
        scope.$digest();
    }));


});
