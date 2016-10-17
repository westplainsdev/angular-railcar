(function () {
    'use strict';

    angular
        .module('train')
        .factory('WebApi', WebApi)

    /** @ngInject */
    function WebApi() {
        // static collection. This could be extracted out
        // into a $http.get call from an api end point or a static 
        // json file.
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

        // these function do not have to be here, they can be define above
        // and referenced here like this: `List: list`
        return {
            list: function () {
                return trainCollection;
            },
            findBy: function (id) {
                // using the built in array filter function 
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