(function() {
    'use strict';
    angular.module('app')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', '$state', 'apiService'];
    /* @ngInject */
    function dashboardController($scope, $state, apiService) {
        var vm = this;
        vm.showTitle = false;
        vm.show = false;
        vm.titleOpen = "";
        vm.lastId= "";
        vm.collapse =false;

        apiService.getAll().then(
            function success (resp) {
                vm.news = resp;
            },
            function error (err) {
                console.log("err",err)
            }
        );

        vm.open = function () {
          vm.show = !vm.show;
          if (!vm.show){
            vm.showTitle = false;
            angular.element('.panel-collapse').collapse('hide');
          }
        }

        vm.OpenDetails = function (id) {
          if(vm.lastId === id){
            if(vm.showTitle){
              vm.showTitle = !vm.showTitle;
              if(!vm.showTitle)
                return vm.titleOpen = "";
            }
          } else {
            apiService.getById(id).then(
              function success (resp) {
                    vm.lastId = resp.id;
                    vm.titleOpen = resp.title;
                    vm.showTitle = true;
                    vm.collapse = true;
              },
              function error (err) {
                  console.log("err",err)
              }
            );
          }
        }
    }
})();
