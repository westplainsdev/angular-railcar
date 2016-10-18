(function(){
  angular.module('train', ['ui.router']).config(ConfigConfig)

    function ConfigConfig($stateProvider, $urlRouterProvider){
        // this is the default route when no other is found.
        $urlRouterProvider.otherwise('/summary');

        // define application routes here
        $stateProvider
            .state('summary', {
                url: '/summary',
                templateUrl: './summary/summary.html',           
                controller: 'Summary.Ctrl'
            })
            
            .state('details', {
                url: '/details/:id',
                templateUrl: './details/details.html',           
                controller: 'Details.Ctrl'
            })
            
            .state('add', {
                url: '/add/:id',
                templateUrl: './add/add.html',           
                controller: 'Add.Ctrl'
            });
    }
})();