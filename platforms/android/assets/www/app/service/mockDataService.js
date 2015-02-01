angular
    .module('common.services')
    .factory('MockDataService', ['$rootScope', '$ionicPlatform', MockDataService]);


/* @ngInject */
function MockDataService($rootScope, $ionicPlatform) {

    var receipts = [
        {
            receiptId: "1",
            store: 'ICA',
            amount: '20NOK',
            location: 'Oslo',
            tlf: '24 11 61 70'
        },

        {
            receiptId: "2",
            store: 'Meny',
            amount: '100NOK',
            location: 'Oslo',
            tlf: '24 11 61 70'
        },

        {
            receiptId: "3",
            store: 'Kiwi',
            amount: '200NOK',
            location: 'Oslo',
            tlf: '24 11 61 70'
        },

        {
            receiptId: "4",
            store: 'RIMI',
            amount: '210NOK',
            location: 'Oslo',
            tlf: '24 11 64 70'
        },

        {
            receiptId: "5",
            store: 'Kiwi',
            amount: '100NOK',
            location: 'Oslo',
            tlf: '21 11 61 70'
        }
    ];

    function getData() {
        return receipts;
    }

    function getReceipt(receiptId) {
        var receipt = _.find(receipts, { 'receiptId' : receiptId});
        return receipt;
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



    function getTag() {
        var tag = {};

        $ionicPlatform.ready(function() {
            nfc.addMimeTypeListener("text/json", onNfc, success, failure);
            /*nfc.addNdefListener(onNfc, success, failure);*/


         function onNfc(nfcEvent) {
             console.log('it is working!: ', nfcEvent);
             var tag = nfcEvent.tag,
                 text = "",
                 payload;

             console.log(tag);

             payload = tag.ndefMessage[0].payload;

             if (payload[0] < 5) {
                 // payload begins with a small integer, it's encoded text
                 var languageCodeLength = payload[0];
                 // chop off the language code and convert to string
                 text = nfc.bytesToString(payload.slice(languageCodeLength + 1));
             } else {
                 // assume it's text without language info
                 text = nfc.bytesToString(payload);

             }

             console.log('TEXT: ', text);



              angular.copy(nfcEvent.tag, tag);
            /* $rootScope.$apply(function(){
                 angular.copy(nfcEvent.tag, tag);
                 // if necessary $state.go('some-route')
             });*/
         }

        function success() {
                console.log("Listening for NDEF Tags.");
            }

        function failure (reason) {
                alert("Error adding NFC Listener " + reason);
            };
        });
    }

    ////////////////

    var service = {
        getData : getData,
        getSingleData: getSingleData,
        getReceipt: getReceipt,
        getTag: getTag
    };

    return service;





}
