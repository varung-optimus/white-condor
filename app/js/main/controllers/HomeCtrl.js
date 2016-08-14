app.controller('HomeCtrl', ['$scope', '$state', function ($scope, $state) {
    var vm = this;

    // Helper functions
    vm.startTest = function () {
        $state.go('app.test', {
            token: this.token
        });
    }
}]);