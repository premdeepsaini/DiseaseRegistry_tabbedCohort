var data = {
    CohortName: '',
    MinAge: 0,
    MaxAge: 150,
    PatientGender: [],
    City: [],
    Diseases: []
};

angular.module('DiseaseRegistry.controllers', ['DiseaseRegistry.services', 'rzModule', 'angularjs-dropdown-multiselect','chart.js'])

    .controller('CohortsListCtrl', function ($scope, $rootScope, $ionicPopup, cohortFactory) {

        getCohortList();

        function getCohortList() {
            cohortFactory.getCohortList().then(function (response) {
                $scope.cohorts = response.data;
            });
        }

        $scope.doRefresh = function () {
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


            $scope.inputCities = cohortFactory.getInputCities();

            $scope.inputDiseases = cohortFactory.getDiseaseList();

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
                    cssClass: 'genderCSS',
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

                data.City = [];
                for (i = 0; i < $scope.inputCities.length; i++) {
                    if ($scope.inputCities[i].checked == true) {
                        data.City.push($scope.inputCities[i].city);
                        $scope.inputCities.checked = false;
                    }
                }

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
                    return;
                }


                console.log(data.CohortName);

                if (data.PatientGender.length == 0) {
                    data.PatientGender.push('Male', 'Female');
                }


                var JSONObj = angular.toJson(data);
                console.log(JSONObj);
                console.log("posting Data");
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

    .controller('GraphCtrl',function($scope,$http,$ionicLoading){


        $scope.disease=[];
        $scope.disease.name="";

        var diseaseJSON={
            "DiseaseName":"Diabetes"
        };

        $scope.graph = [];                        // Empty graph object to hold the details for this graph
        // $scope.graph.data = [];
        // $scope.graph.labels = [];
        // $scope.graph.color = [];// Add labels for the X-axis
        //$scope.graph.series = ['Patient Count'];  // Add information for the hover/touch effect

        $scope.showLoading = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };
        $scope.hideLoading = function(){
            $ionicLoading.hide();
        };

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        $scope.getGraphClick=function(){

            $scope.graph=[];
            /*$scope.graph.data = [];
            $scope.graph.labels = [];*/
            if($scope.disease.name.length==0){
                alert("Please Enter Disease Name!!!");
                return;
            }

            diseaseJSON.DiseaseName=$scope.disease.name;
            console.log(diseaseJSON.DiseaseName);

            $http.post("http://diseaseregistry-61406.onmodulus.net/api/Disease",diseaseJSON).then(function(response){

                $scope.showLoading();

                $http.post("http://diseaseregistry-61406.onmodulus.net/api/Graph",response.data).then(function(response){

                    if(response.data.length==0){
                        alert("No Patients Found");
                        return;
                    }

                    var temp1=(response.data);
                    // var CityCount=[];
                    temp1.forEach(function(obj){

                        $scope.graph.push({value:obj.CityCount,label:obj._id.City, color:getRandomColor()});
                        /*CityCount.push(obj.CityCount);
                        $scope.graph.labels.push(obj._id.City);
                        $scope.graph.color.push(getRandomColor());*/

                    });
                    // $scope.graph.data.push(CityCount);

                    $scope.hideLoading();

                    var ctx0 = document.getElementById("myPieChart").getContext("2d");
                    myPieChart = new Chart(ctx0).Pie($scope.graph);
                });

            });

        };

    });
