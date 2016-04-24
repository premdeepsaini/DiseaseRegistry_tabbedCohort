var data = {
    CohortName: '',
    MinAge: 0,
    MaxAge: 150,
    PatientGender: [],
<<<<<<< HEAD
    City: [],
    Diseases: []
};

angular.module('DiseaseRegistry.controllers', ['DiseaseRegistry.services', 'rzModule', 'angularjs-dropdown-multiselect','chart.js'])

    .controller('CohortsListCtrl', function ($scope, $rootScope, $ionicPopup, cohortFactory) {
=======
    City: []
};

angular.module('DiseaseRegistry.controllers', ['DiseaseRegistry.services', 'rzModule', 'angularjs-dropdown-multiselect'])

    .controller('CohortsListCtrl', function ($scope, $rootScope, $http, cohortFactory) {
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69

        getCohortList();

        function getCohortList() {
            cohortFactory.getCohortList().then(function (response) {
                $scope.cohorts = response.data;
            });
        }

        $scope.doRefresh = function () {
<<<<<<< HEAD
            getCohortList();
            $scope.$broadcast('scroll.refreshComplete');

        };

        $scope.getCohort = function (cohort) {
            $rootScope.cohort_name = cohort.Name;
            $rootScope.cohort_id = cohort._id;
            cohortFactory.getPatientsList($rootScope.cohort_id).then(function (response) {
                $rootScope.patientsList = response.data.Patients;
                $rootScope.filtersList = response.data.Filters;
                if($rootScope.filtersList.City.length==0){
                    $rootScope.filtersList.City.push("All Cities");
                }
                if($rootScope.filtersList.Diseases.length==0){
                    $rootScope.filtersList.Diseases.push("None Selected");
                }
                console.log($rootScope.filtersList);

            });

        };

        $scope.deleteCohort = function (cohort) {
            $scope.cohorts.splice($scope.cohorts.indexOf(cohort), 1);
            cohortFactory.deleteCohort(cohort);
        };

        $scope.getPatientDetails = function (patientID) {
            cohortFactory.getPatient(patientID).then(function (response) {
                $rootScope.patientDetails = response.data;
                /*console.log("sadas" + angular.toJson($rootScope.patientDetails));*/
                $scope.patientDetailsPopup();
            });

        };


        $scope.patientDetailsPopup = function () {
            $scope.patientDetailsPopupDialog = $ionicPopup.alert({
                title:'Patient Details',
                template: '<div class="padding-left" ng-repeat="patient in patientDetails">'
                + '<h4>Name: {{patient.FirstName}} {{patient.LastName}}</h4>'
                + '<h4>Gender: {{patient.PatientGender}}</h4>'
                + '<h4>Date-of-Birth: {{patient.PatientDateOfBirth | date:"yyyy-MM-dd"}}</h4>'
                + '<h4>City: {{patient.City}}</h4>'
                + '<h4>Marital Status: {{patient.PatientMaritalStatus}}</h4>'
                + '</div>',
                okText: 'Close',
                okType: 'button-assertive'

            });

            /*console.log($scope.patientDetailsPopupDialog);*/
        };

        $scope.patientDetailsClose = function () {

            $scope.patientDetailsPopupDialog.close();

        };
    })

    .controller('AddCohortCtrl', function ($scope, $ionicPopup, $ionicListDelegate,$ionicTabsDelegate, cohortFactory) {

            $scope.gender = '';
            $scope.cohortName = {
                name: ''
            };
=======
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
            $scope.cohortName="";
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69


            $scope.inputCities = cohortFactory.getInputCities();

<<<<<<< HEAD
            $scope.inputDiseases = cohortFactory.getDiseaseList();
=======
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69

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
<<<<<<< HEAD
                data.MinAge = 0;
                data.MaxAge = 150;
=======
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
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
<<<<<<< HEAD
=======
                    title: 'Gender',
                    subtitle: 'Select Gender',
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
                    scope: $scope
                });
            };


            $scope.GenderCancel = function () {
<<<<<<< HEAD
                data.PatientGender = [];
                data.PatientGender.push('Male', 'Female');
=======
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
                $scope.genderPopupDialog.close();
            };

            $scope.GenderSubmit = function () {

<<<<<<< HEAD
                console.log($scope.gender);
                if ($scope.gender != '') {
                    if (data.PatientGender.length != 0) {
                        data.PatientGender = [];
                        console.log("On clearing" + angular.toJson(data));
                    }
                    data.PatientGender.push($scope.gender);
                    console.log("After Clearing" + angular.toJson(data));
                    document.getElementById("genderText").style.color = "Blue";
                    document.getElementById("genderSelect").innerHTML = data.PatientGender[0];
=======
                if ($scope.gender != '') {
                    data.PatientGender.push($scope.gender);
                    document.getElementById("genderText").style.color = "Blue";
                    document.getElementById("genderSelect").innerHTML = data.PatientGender[0];
                    console.log(data.PatientGender);
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
                }
                else {
                    data.PatientGender.push('Male', 'Female');
                }

<<<<<<< HEAD
=======
                console.log(data);

                //console.log($scope.inputCities);
                /*var JSONObj = angular.toJson($scope.data);
                 console.log(JSONObj);
                 console.log("posting Data");
                 $http.post("http://diseaseregistry-59621.onmodulus.net/api/Filters", JSONObj).success(function (data) {
                 console.log("Data Posted" + angular.toJson(data));
                 });*/

>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
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
<<<<<<< HEAD
                    cssClass: 'genderCSS',
                    templateUrl: 'templates/filters/cityFilter.html',
=======
                    templateUrl: 'templates/filters/cityFilter.html',
                    title: 'City',
                    subtitle: 'Select Cities',
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
                    scope: $scope
                });
            };

<<<<<<< HEAD
            $scope.CityCancel = function () {

                for (i = 0; i < $scope.inputCities.length; i++) {
                    if ($scope.inputCities[i].checked == true) {
                        $scope.inputCities[i].checked = false;
                    }
                }
                $scope.cityPopupDialog.close();
            };

            $scope.CitySubmit = function () {

                data.City = [];
=======

            $scope.CitySubmit = function () {

>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
                for (i = 0; i < $scope.inputCities.length; i++) {
                    if ($scope.inputCities[i].checked == true) {
                        data.City.push($scope.inputCities[i].city);
                        $scope.inputCities.checked = false;
                    }
                }
<<<<<<< HEAD

                document.getElementById("cityText").style.color = "Blue";
                document.getElementById("citySelect").innerHTML = data.City.length + " Cities selected";
                console.log(data);
                $scope.cityPopupDialog.close();
            };

            $scope.onCityClear = function () {
                data.City = [];
                console.log(data.City);
                for (i = 0; i < $scope.inputCities.length; i++) {
                    if ($scope.inputCities[i].checked == true) {
                        $scope.inputCities[i].checked = false;
                    }
                }

                document.getElementById("cityText").style.color = "Black";
                document.getElementById("citySelect").innerHTML = "";
                $ionicListDelegate.$getByHandle('clearButton').closeOptionButtons();
            }

//////////////////////////////////City Filter Ends///////////////////////////////////////////////////////////

//////////////////////////////////Disease Filter Begin///////////////////////////////////////////////////////////

            $scope.diseasePopup = function () {
                $scope.diseasePopupDialog = $ionicPopup.show({
                    cssClass: 'diseaseCSS',
                    templateUrl: 'templates/filters/diseaseFilter.html',
                    scope: $scope
                });
            };

            $scope.DiseaseCancel = function () {

                for (i = 0; i < $scope.inputDiseases.length; i++) {
                    if ($scope.inputDiseases[i].checked == true) {
                        $scope.inputDiseases[i].checked = false;
                    }
                }
                $scope.diseasePopupDialog.close();
            };

            $scope.DiseaseSubmit = function () {

                data.Diseases = [];
                for (i = 0; i < $scope.inputDiseases.length; i++) {
                    if ($scope.inputDiseases[i].checked == true) {
                        data.Diseases.push($scope.inputDiseases[i].disease);
                        $scope.inputDiseases.checked = false;
                    }
                }

                document.getElementById("diseaseText").style.color = "Blue";
                document.getElementById("diseaseSelect").innerHTML = data.Diseases.length + " Diseases selected";
                console.log(data);
                $scope.diseasePopupDialog.close();
            };

            $scope.onDiseaseClear = function () {
                data.Disease= [];
                console.log(data.Disease);
                for (i = 0; i < $scope.inputDiseases.length; i++) {
                    if ($scope.inputDiseases[i].checked == true) {
                        $scope.inputDiseases[i].checked = false;
                    }
                }
                document.getElementById("diseaseText").style.color = "Black";
                document.getElementById("diseaseSelect").innerHTML = "";
                $ionicListDelegate.$getByHandle('clearButton').closeOptionButtons();
            }
//////////////////////////////////Disease Filter Ends///////////////////////////////////////////////////////////
            $scope.createCohortSubmit = function () {

                console.log($scope.cohortName);
                data.CohortName = $scope.cohortName.name;

                if (data.CohortName.length == 0) {

                    alert("Please Enter Cohort Name..!!");
=======
                $scope.cityPopupDialog.close();
            };

            $scope.CityCancel = function () {

                $scope.cityPopupDialog.close();
            };

//////////////////////////////////City Filter Begin///////////////////////////////////////////////////////////

            $scope.createCohortSubmit = function () {

                data.CohortName = $scope.cohortName;

                if (!data.CohortName.length) {

                    alert("bc naam to daal");
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
                    return;
                }


                console.log(data.CohortName);

                if (data.PatientGender.length == 0) {
                    data.PatientGender.push('Male', 'Female');
                }

<<<<<<< HEAD
=======
                if (data.City.length == 0) {
                    for (i = 0; i < $scope.inputCities.length; i++) {
                        data.City.push($scope.inputCities[i].city);
                    }
                }
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69

                var JSONObj = angular.toJson(data);
                console.log(JSONObj);
                console.log("posting Data");
<<<<<<< HEAD
                cohortFactory.postFilters(JSONObj).success(function (data) {
                    $scope.onDiseaseClear();
                    $scope.onGenderClear();
                    $scope.onAgeClear();
                    $scope.onCityClear();
                    document.getElementById("cohortNameField").innerHTML = "";
                    console.log("Data Posted" + angular.toJson(data));
                    $ionicTabsDelegate.$getByHandle('tab1').select(0);
                });
            };
        })

    .controller('GraphCtrl',function($scope,$http){


        $scope.disease=[];
        $scope.disease.name="";

        var diseaseJSON={
            "DiseaseName":"Diabetes"
        };

        $scope.graph = {};                        // Empty graph object to hold the details for this graph
        $scope.graph.data = [];
        $scope.graph.labels = [];    // Add labels for the X-axis
        //$scope.graph.series = ['Patient Count'];  // Add information for the hover/touch effect

        $scope.getGraphClick=function(){

            $scope.graph.data = [];
            $scope.graph.labels = [];
            if($scope.disease.name.length==0){
                alert("Please Enter Disease Name!!!");
                return;
            }

            $http.post("http://diseaseregistry-61406.onmodulus.net/api/Disease",diseaseJSON).then(function(response){

                $http.post("http://diseaseregistry-61406.onmodulus.net/api/Graph",response.data).then(function(response){

                    if(response.data.length==0){
                        alert("No Patients Found");
                        return;
                    }

                    var temp1=(response.data);
                    var CityCount=[];
                    temp1.forEach(function(obj){
                        CityCount.push(obj.CityCount);
                        $scope.graph.labels.push(obj._id.City);
                    });
                    $scope.graph.data.push(CityCount);
                });

            });

        };

    });
=======
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
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
