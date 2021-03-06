/**
 * Created by xavi on 12/06/16.
 */
angular.module('DLPApp').controller('CreateLCCntrll',['$scope', 'LogisticCenter', 'DefinedStyle', 'UpdateLc',
    function ($scope, LogisticCenter, DefinedStyle, UpdateLc){
        var init = function(){
            $scope.newCenter = new LogisticCenter();
        };
        init();
        DefinedStyle.get({},
            function (data) {
                $scope.def_style = [];
                data.results.forEach(function(city) {
                    $scope.def_style.push(city);
                });
            }
        );
        $scope.errors = {
            'name': {'field': 'NAME', 'text': 'REQUIRED', 'show': false},
            'lat': {'field': 'LATITUDE', 'text': 'REQUIRED', 'show': false},
            'alt': {'field': 'ALTITUDE', 'text': 'REQUIRED', 'show': false},
            'lng': {'field': 'LONGITUDE', 'text': 'REQUIRED', 'show': false},
            'address': {'field': 'ADDRESS', 'text': 'REQUIRED', 'show': false},
            'defined_style': {'field': 'STYLE', 'text': 'REQUIRED', 'show': false},
            'description': {'field': 'DESCRIPTION', 'text': 'REQUIRED', 'show': false},
        };
        $scope.is_selecting = false;
        $scope.$watch('newCoords.lat', function () {
            if ($scope.is_selecting)
                $scope.newCenter.lat = $scope.newCoords.lat;
        });
        $scope.$watch('newCoords.lng', function () {
            if ($scope.is_selecting)
                $scope.newCenter.lng = $scope.newCoords.lng;
        });

        $scope.change_selecting = function(){
            $scope.is_selecting = !$scope.is_selecting;
            if($scope.is_selecting)
                $scope.select_coords.actives.push("lcnew");
            else
                $scope.deactivate_coords("lcnew")
        };
        $scope.create_new_center = function(){
            $scope.newCenter.city = $scope.main_city.id;
            $scope.newCenter.$save().then(
                function(result){
                    $scope.logistic_centers.push(result);
                    UpdateLc.lc();
                    $scope.add_marker_center(result.id, result.lat, result.lng, result.defined_style);
                    if($scope.is_selecting)
                        $scope.change_selecting();
                    init();
                },
                function(data){
                    clean_errors();
                    Object.keys(data.data).forEach(function (key) {
                        $scope.errors[key].show = true;
                        $scope.errors[key].text = data.data[key][0];
                    });
                }
            )
        };
        var clean_errors = function(){
            angular.forEach($scope.errors, function(item){
                item.show = false;
            });
        };
        $scope.closeAlert = function(key) {
            $scope.errors[key].show = false;
        };

    }]);
