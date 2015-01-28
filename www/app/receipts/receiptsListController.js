angular
    .module('App')
    .controller('ReceiptsListController', ['MockDataService', '$state', ReceiptsListController]);

/* @ngInject */
function ReceiptsListController(MockDataService, $state) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ReceiptsListController';

    vm.singleReceipt = singleReceipt;

    /*vm.getData = MockDataService.getData();
    console.log(vm.getData);*/

    vm.data = MockDataService.getData();

    activate();

    ////////////////

    function activate() {
    }

    function singleReceipt(data) {
        console.log(data);
        console.log('It works!');
        $state.go('app.home', data);
    }


}