(function() {
    'use strict'

    angular.module('app').
    factory('apiService', apiService);

    apiService.$inject = ['$http', '$q'];

    function apiService($http, $q) {

        var apiService = {
            getAll: getAll,
            getById:getById
        };
        return apiService;

        function getAll() {
            var deferred = $q.defer();
            $http.get('/apiData/value.json')
                .success(function(value, status, headers, config) {
                    deferred.resolve(value.news);
                })
                .error(function(status) {
                    deferred.reject(status);
                });
            return deferred.promise;
        };

        function getById(id) {
            var deferred = $q.defer();
            $http.get('/apiData/value.json')
                .success(function(value, status, headers, config) {
                    deferred.resolve(_.find(value.news, function(o){ return o.id == id }));
                })
                .error(function(status) {
                    deferred.reject(status);
                });
            return deferred.promise;
        };
    }
})();
