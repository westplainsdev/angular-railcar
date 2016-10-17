(function () {
    'use strict';

    angular
        .module('train')
        .controller('Details.Ctrl', DetailsCtrl)

    /** @ngInject */
    function DetailsCtrl($scope, WebApi, $stateParams) {
        $scope.title = 'Train Details Page';
        var foundTrain = WebApi.findBy($stateParams.id);
        $scope.train = foundTrain;
    }

}());