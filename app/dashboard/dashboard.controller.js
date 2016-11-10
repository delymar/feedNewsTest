(function() {
    'use strict';
    angular.module('app')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', '$state', 'apiService'];
    /* @ngInject */
    function dashboardController($scope, $state, apiService) {
        var vm = this;
        vm.objeto=[];
        $scope.mostrar=false;

        $scope.actions = {
            Open: function () {
                apiService.getAll().then(
                    function success (resp) {
                        $scope.news = resp;
                    },
                    function error (err) {
                        console.log("err",err)
                    }
                );

            },
            OpenDetails: function () {
                $scope.mostrar = true;
            }
        }
    }
})();
