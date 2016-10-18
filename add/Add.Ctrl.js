(function () {
    'use strict';

    angular
        .module('train')
        .controller('Add.Ctrl', AddCtrl)

    /** @ngInject */
    function AddCtrl($scope, WebApi, $stateParams, $timeout) {
        var foundTrain = {};
        var loadData = function () {
            foundTrain = WebApi.findBy($stateParams.id);
            $scope.train = foundTrain;
            $scope.title = 'Add railcar to ' + foundTrain.routeName + ' train';
        };

        $scope.addCar = function () {
            foundTrain.railcars.push($scope.car);
            WebApi.update(foundTrain);
            $scope.car = {};
            loadData();
            if (foundTrain.railcars.length > 0) {
                $scope.message = 'Car Added';
                $timeout(function () {
                    $scope.message = '';
                }, 800);

            }
        }

        // make sure to call this function 
        // the first time load of the page
        loadData();
    }

}());