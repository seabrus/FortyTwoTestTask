// ==========================================================
//     HomeController
// ==========================================================
describe('HomeController', function() {
    // Instantiate a new version of the module before each test
    beforeEach(module('test42cc'));

    var ctrl;
    var loc;

    // Before each unit test, instantiate a new instance of the controller
    beforeEach(inject( function($controller, $location) {
        ctrl = $controller('HomeController');
        loc = $location;
    }));

    it('test 1: should have method goAhead() available on load', function() {
        expect(ctrl.goAhead).toBeTruthy();
    });

    it('test 2: goAhead() should route to /tasks', function() {
        ctrl.goAhead();
        expect(loc.path()).toEqual('/tasks');
    });
});
