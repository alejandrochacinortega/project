angular
    .module('common.services')
    .factory('MockDataService', [MockDataService]);


/* @ngInject */
function MockDataService() {


    function getData() {
        var receipts = [
            {
                receiptId: 1,
                store: 'ICA',
                amount: '20NOK',
                location: 'Oslo',
                tlf: '24 11 61 70'
            },

            {
                receiptId: 2,
                store: 'Meny',
                amount: '100NOK',
                location: 'Oslo',
                tlf: '24 11 61 70'
            },

            {
                receiptId: 3,
                store: 'Kiwi',
                amount: '200NOK',
                location: 'Oslo',
                tlf: '24 11 61 70'
            },

            {
                receiptId: 4,
                store: 'RIMI',
                amount: '210NOK',
                location: 'Oslo',
                tlf: '24 11 64 70'
            },

            {
                receiptId: 5,
                store: 'Kiwi',
                amount: '100NOK',
                location: 'Oslo',
                tlf: '21 11 61 70'
            }
        ];
        return receipts;
    }

    function getSingleData() {
        var d = [
            {
                store: 'ICA',
                amount: '20NOK',
                location: 'Oslo',
                tlf: '24 11 61 70'
            }
        ];
        return d;
    }

    ////////////////

    var service = {
        getData : getData,
        getSingleData: getSingleData
    };

    return service;





}
