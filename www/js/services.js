angular.module('DiseaseRegistry.services', [])
    .factory('cohortFactory', function ($http) {

        var url = "http://diseaseregistry-59621.onmodulus.net/api/Cohorts";

        return {

            getCohortList: function () {
                return $http.get(url);
            },

            deleteCohort: function (cohort) {
                url += "/" + cohort._id;
                return $http.delete(url);
            }

        };
    });