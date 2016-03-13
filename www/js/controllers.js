angular.module('DiseaseRegistry.controllers', ['DiseaseRegistry.services', 'rzModule'])

    .controller('CohortsListCtrl', function ($scope, $rootScope, $http, cohortFactory) {

        getCohortList();

        function getCohortList() {
            cohortFactory.getCohortList().then(function (response) {
                $scope.cohorts = response.data;
            });
        }

        $scope.doRefresh = function () {
            cohortFactory.getCohortList()
                .success(function (data) {
                    $scope.cohorts = data;
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };

        $scope.getCohort = function (cohort) {
            $rootScope.cohort_name = cohort.name;
            $rootScope.cohortId = cohort.id;
            $rootScope.cohort_id = cohort._id;
        };

        $scope.deleteCohort = function (cohort) {
            cohortFactory.deleteCohort(cohort).then(function (cohort) {
                $scope.cohorts.splice($scope.cohorts.indexOf(cohort), 1);
            });
        };
    })

    .controller('AddCohortCtrl', function ($scope, $ionicPopup, $ionicListDelegate, $http) {

        $scope.gender = '';
        var data = {
            MinAge: 30,
            MaxAge: 119,
            PatientGender: []
        };


        $scope.ageSlider = {
            min: 0,
            max: 150,
            options: {
                floor: 0,
                ceil: 150
            }
        };
/////////////////////////////////////Age Filter Begin///////////////////////////////////////////////////////////
        $scope.agePopup = function () {

            $scope.agePopupDialog = $ionicPopup.show({
                templateUrl: 'templates/filters/ageFilter.html',
                title: 'Age',
                subtitle: 'Enter the range of age',
                scope: $scope
            });

        };

        $scope.AgeSubmit = function () {
            data.MinAge = $scope.ageSlider.min;
            data.MaxAge = $scope.ageSlider.max;
            document.getElementById("ageText").style.color = "Blue";
            document.getElementById("ageRange").innerHTML = data.MinAge + " - " + data.MaxAge;

            console.log(data);

            /*var JSONObj = angular.toJson($scope.data);
            console.log(JSONObj);
            console.log("posting Data");
            $http.post("http://diseaseregistry-59621.onmodulus.net/api/Filters", JSONObj).success(function (data) {
                console.log("Data Posted" + angular.toJson(data));
            });*/

            $scope.agePopupDialog.close();
        };

        $scope.AgeCancel = function () {
            $scope.agePopupDialog.close();
        };

        $scope.onAgeClear = function () {
            data.MinAge = 0;
            data.MaxAge = 150;

            document.getElementById("ageText").style.color = "Black";
            document.getElementById("ageRange").innerHTML = "";
            $ionicListDelegate.$getByHandle('clearButton').closeOptionButtons();
        };

////////////////////////////////////Age Filter Ends///////////////////////////////////////////////////////////

////////////////////////////////////Gender Filter Begin///////////////////////////////////////////////////////////
        $scope.genderPopup = function () {

            $scope.genderPopupDialog = $ionicPopup.show({
                templateUrl: 'templates/filters/genderFilter.html',
                title: 'Gender',
                subtitle: 'Select Gender',
                scope: $scope
            });
        };


        $scope.GenderCancel = function () {
            $scope.genderPopupDialog.close();
        };

        $scope.GenderSubmit = function () {

            if ($scope.gender != '') {
                data.PatientGender.push($scope.gender);
                document.getElementById("genderText").style.color = "Blue";
                document.getElementById("genderSelect").innerHTML = data.PatientGender[0];
            console.log(data.PatientGender);
            }
            else {
                data.PatientGender.push('Male', 'Female');
            }

            console.log($scope.ageSlider);

            /*var JSONObj = angular.toJson($scope.data);
            console.log(JSONObj);
            console.log("posting Data");
            $http.post("http://diseaseregistry-59621.onmodulus.net/api/Filters", JSONObj).success(function (data) {
                console.log("Data Posted" + angular.toJson(data));
            });*/

            $scope.genderPopupDialog.close();
        };


        $scope.onGenderClear = function () {
            data.PatientGender = [];
            data.PatientGender.push('Male', 'Female');

            document.getElementById("genderText").style.color = "Black";
            document.getElementById("genderSelect").innerHTML = "";
            $ionicListDelegate.$getByHandle('clearButton').closeOptionButtons();


        };
////////////////////////////////////Gender Filter Ends///////////////////////////////////////////////////////////

////////////////////////////////////City Filter Begin///////////////////////////////////////////////////////////


//////////////////////////////////City Filter Begin///////////////////////////////////////////////////////////

        $scope.createCohortSubmit = function () {

            var JSONObj = angular.toJson($scope.data);
            console.log(JSONObj);
            console.log("posting Data");
            $http.post("http://diseaseregistry-59621.onmodulus.net/api/Filters", JSONObj).success(function (data) {
                console.log("Data Posted" + angular.toJson(data));
            });
        };
    });
