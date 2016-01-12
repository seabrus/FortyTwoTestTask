// ==========================================================
//     MenuController
// ==========================================================
describe('MenuController', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('test42cc'));

    var ctrl;
    var loc;
    var mockService, userService;

    // Before each unit test, instantiate a new instance of the controller
    beforeEach(module(function($provide) {
        mockService = {
            username: '',
        };
        $provide.value('userState', mockService);
    }));

    beforeEach(inject( function($controller, $location, userState) {
        ctrl = $controller('MenuController');
        loc = $location;
        userService = userState;
    }));

    it('test 1: should have method goHome() available on load', function() {
        expect(ctrl.goHome).toBeTruthy();
    });

    it('test 2: goHome() should route to /tasks for authorized users', function() {
        userService.username = 'dummy';
        ctrl.goHome();
        expect(loc.path()).toEqual('/tasks');
    });

    it('test 3: goHome() should route to / for unauthorized users', function() {
        userService.username = '';
        ctrl.goHome();
        expect(loc.path()).toEqual('/');
    });

});
