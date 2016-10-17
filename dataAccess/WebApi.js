(function () {
    'use strict';

    angular
        .module('train')
        .factory('WebApi', WebApi)

    /** @ngInject */
    function WebApi() {
        var trainCollection = [{
            id: 100,
            routeName: 'Northwest',
            origin: 'Kansas City',
            destination: 'Seattle',
            railcars: []
        }, {
            id: 101,
            routeName: 'Southwest',
            origin: 'Kansas City',
            destination: 'Albuquerque',
            railcars: []
        }, {
            id: 102,
            routeName: 'East',
            origin: 'Chicago',
            destination: 'New York',
            railcars: []
        }];


        return {
            list: function () {
                return trainCollection;
            },
            findBy: function (id) {
                var train = trainCollection.filter(function (obj) {
                    return obj.id == id
                });
                return train[0];
            },
            update: function(updatedTrain){
                var foundIndex = trainCollection.indexOf(updatedTrain);
                trainCollection[foundIndex] = updatedTrain;
            }
        }


    }

}());