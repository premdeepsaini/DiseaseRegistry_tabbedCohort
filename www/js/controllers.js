var data = {
    CohortName: '',
    MinAge: 0,
    MaxAge: 150,
    PatientGender: [],
    City: []
};

angular.module('DiseaseRegistry.controllers', ['DiseaseRegistry.services', 'rzModule', 'angularjs-dropdown-multiselect'])

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

    .controller('AddCohortCtrl', function ($scope, $ionicPopup, $ionicListDelegate, $http, cohortFactory) {

            $scope.gender = '';
            $scope.cohortName = "";


            $scope.inputCities = cohortFactory.getInputCities();


            $scope.cityDropdownSettings = {
                enableSearch: "true",
                scrollableHeight: '300px',
                scrollable: true,
                displayProp: 'City'
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
                data.MinAge = 0;
                data.MaxAge = 150;
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
                    scope: $scope
                });
            };


            $scope.GenderCancel = function () {
                data.PatientGender = [];
                data.PatientGender.push('Male', 'Female');
                $scope.genderPopupDialog.close();
            };

            $scope.GenderSubmit = function () {

                if ($scope.gender != '') {
                    data.PatientGender.push($scope.gender);
                    document.getElementById("genderText").style.color = "Blue";
                    document.getElementById("genderSelect").innerHTML = data.PatientGender[0];
                }
                else {
                    data.PatientGender.push('Male', 'Female');
                }

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

            $scope.cityPopup = function () {
                $scope.cityPopupDialog = $ionicPopup.show({
                    cssClass:'genderCSS',
                    templateUrl: 'templates/filters/cityFilter.html',
                    scope: $scope
                });
            };

            $scope.CityCancel = function () {

                for (i = 0; i < $scope.inputCities.length; i++) {
                    if ($scope.inputCities[i].checked == true) {
                        $scope.inputCities[i].checked = false;
                    }
                }
                $scope.cityPopupDialog.close();
            };

            $scope.CitySubmit = function () {

                for (i = 0; i < $scope.inputCities.length; i++) {
                    if ($scope.inputCities[i].checked == true) {
                        data.City.push($scope.inputCities[i].city);
                        $scope.inputCities.checked = false;
                    }
                }

                document.getElementById("cityText").style.color = "Blue";
                document.getElementById("citySelect").innerHTML = data.City.length + " Cities selected";
                console.log(data.City);
                $scope.cityPopupDialog.close();
            };

            $scope.onCityClear = function () {
                data.City = [];
                console.log(data.City);

                document.getElementById("cityText").style.color="Black";
                document.getElementById("citySelect").innerHTML="";
                $ionicListDelegate.$getByHandle('clearButton').closeOptionButtons();
            }

//////////////////////////////////City Filter Begin///////////////////////////////////////////////////////////

            $scope.createCohortSubmit = function () {

                data.CohortName = $scope.cohortName;

                if (!data.CohortName.length) {

                    alert("Please Enter Cohort Name..!!");
                    return;
                }


                console.log(data.CohortName);

                if (data.PatientGender.length == 0) {
                    data.PatientGender.push('Male', 'Female');
                }

                if (data.City.length == 0) {
                    for (i = 0; i < $scope.inputCities.length; i++) {
                        data.City.push($scope.inputCities[i].city);
                    }
                }

                var JSONObj = angular.toJson(data);
                console.log(JSONObj);
                console.log("posting Data");
                $http.post("http://diseaseregistry-59621.onmodulus.net/api/Filters", JSONObj).success(function (data) {
                    console.log("Data Posted" + angular.toJson(data));
                });


                /*
                 $http.post("http://192.168.10.202/api/Filters", JSONObj).success(function (data) {
                 console.log("Data Posted" + angular.toJson(data));
                 });*/
            }
            ;
        }
    );
