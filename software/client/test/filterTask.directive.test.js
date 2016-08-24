/**
 * Created by semanticbits on 23/8/16.
 */
describe('directive: filter-tasks', function() {
    var element, scope;

    beforeEach(module('toDoApp'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        element =
            '<filter-tasks></filter-tasks>';

        element = $compile(element)(scope);
        scope.$digest();
    }));

});
