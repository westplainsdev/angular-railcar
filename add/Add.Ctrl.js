(function () {
    'use strict';

    angular
        .module('train')
        .controller('Add.Ctrl', AddCtrl)

    /** @ngInject */
    function AddCtrl($scope, WebApi, $stateParams) {
        var foundTrain = {};
        var loadData = function () {
            foundTrain = WebApi.findBy($stateParams.id);
            $scope.train = foundTrain;
            $scope.title = 'Add railcar to ' + foundTrain.routeName + ' train';
        };



        $scope.addCar = function () {
            $scope.message = '';
            foundTrain.railcars.push($scope.car);
            WebApi.update(foundTrain);
            $scope.car = {};
            loadData();
            if (foundTrain.railcars.length > 0) {
                $scope.message = 'Car Added';
            }
        }


        loadData();
    }

}());