(function() {

    angular.module('app')
        .run(runBlock);

    runBlock.$inject = ['$rootScope', '$state'];

    function runBlock($rootScope, $state) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $rootScope.currentState = toState.name;
        });
    }

}());
