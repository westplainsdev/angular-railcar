(function () {
    'use strict';

    angular
        .module('train')
        .factory('WebApi', WebApi)

    /** @ngInject */
    function WebApi() {
        // static collection. This could be extracted out
        // into a $http.get call from an api end point or a static 
        // json file. EXAMPLE
/*  
        // this file 
        loadTrains: function(){
            return $http.get('trainCollection.json');
        }

        // a consuming file
        var trainCollection = [];
        WebApi.loadTrains().then(function(response) {
            trainCollection = response.data;
            $scope.trainCollection = trainCollection;
        });

    // when using $http each request utilizies a `promise` to manage when 
        the respnse will return. By returning the $http back from the factory
        you give the consuming controller the ability to chain togehter additional
        respones before binding the data to the page.  
*/

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

        // these function do not have to be here, they can be defined above
        // and referenced here like this: `List: list`
        return {
            list: function () {
                return trainCollection;
            },
            findBy: function (id) {
                // using the built in array filter function 
                var train = trainCollection.filter(function (obj) {
                    // parseInt because the ID comes in as a "string"
                    return obj.id === parseInt(id);
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