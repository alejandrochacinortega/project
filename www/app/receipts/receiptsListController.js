angular
    .module('App')
    .controller('ReceiptsListController', ['MockDataService', '$state', ReceiptsListController]);

/* @ngInject */
function ReceiptsListController(MockDataService, $state) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ReceiptsListController';

    vm.singleReceipt = MockDataService.getSingleData();

    vm.receipts = MockDataService.getData();

    activate();

    ////////////////

    function activate() {
    }



}