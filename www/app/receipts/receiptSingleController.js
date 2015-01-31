angular
    .module('App')
    .controller('ReceiptSingleController', [ReceiptSingleController]);

/* @ngInject */
function ReceiptSingleController() {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.receipt = {
        receiptId: 1,
        store: 'ICA',
        amount: '20NOK',
        location: 'Oslo',
        tlf: '24 11 61 70'
    };
    vm.title = "Receipt Detail: " + vm.receipt.receiptId;

    activate();

    ////////////////

    function activate() {
    }
}