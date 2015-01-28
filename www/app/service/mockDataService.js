angular
    .module('App')
    .factory('MockDataService', MockDataService);


/* @ngInject */
function MockDataService() {


    function getData() {
        var data = [
            {
                store: 'ICA',
                amount: '20NOK',
                location: 'Oslo',
                tlf: '24 11 61 70'

            },

            {
                store: 'Meny',
                amount: '100NOK',
                location: 'Oslo',
                tlf: '24 11 61 70'
            },

            {
                store: 'Kiwi',
                amount: '200NOK',
                location: 'Oslo',
                tlf: '24 11 61 70'
            },

            {
                store: 'RIMI',
                amount: '210NOK',
                location: 'Oslo',
                tlf: '24 11 64 70'
            },

            {
                store: 'Kiwi',
                amount: '100NOK',
                location: 'Oslo',
                tlf: '21 11 61 70'
            }
        ];
        return data;
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
