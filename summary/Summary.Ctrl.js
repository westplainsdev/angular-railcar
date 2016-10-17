(function () {
    'use strict';

    angular
        .module('train')
        .controller('Summary.Ctrl', SummaryCtrl)

    /** @ngInject */
    function SummaryCtrl($scope, WebApi) {
        $scope.title = 'Active Train Summary Page';
        var trainCollection = WebApi.list();
        $scope.trainCollection = trainCollection;

    }

}());