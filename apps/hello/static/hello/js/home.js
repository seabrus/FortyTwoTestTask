app42.controller('HomeController', ['$location', function($location) {
	var self = this;

    self.goAhead = function() {
        $location.path('/tasks');
   };

}]);

app42.controller('DummyController', ['$location', function($location) {
	var self = this;
}]);
