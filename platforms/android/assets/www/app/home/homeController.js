angular
    .module('App')
    .controller('HomeController', ['$scope', 'MockDataService', '$state', '$timeout', HomeController]);

/* @ngInject */
function HomeController($scope, MockDataService, $state, $timeout) {
    var vm = this;

    vm.activate = activate;
    vm.title = 'HomeController';
    vm.info = true;
    vm.listAccess = listAccess;
    activate();

    vm.data = MockDataService.getData();
    vm.single = MockDataService.getSingleData();

    $scope.tag = MockDataService.getTag();
    console.log('READING TAG: ', $scope.tag);

    ////////////////

    function activate() {
    }

    function listAccess() {
        $scope.show = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };
        $state.go('app.receiptsList');
    }

    console.log('single: ', vm.single);
    console.log('single: ', vm.data);




}