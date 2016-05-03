var login = false;
angular.module('insurance', [])

.controller('login', ['$scope', '$http', '$window', function($scope, $http, $window) {
    angular.element(document).ready(function() {
        $('.slider').slider({
            full_width: true
        });
    });
    $scope.modal = function() {
        $("#modal1").openModal();
    }
    $scope.insured = function() {
        console.log("insured")
        $("#insurance_modal").openModal();
    }

    $scope.login = function(user) {
        console.log($scope.user.email);
        console.log($scope.user.password);
        var res = $http.post('/login', user);
        res.success(function(data, status, headers, config) {
            console.log(data);
            if (data == 'exsit') {
                $window.alert("Login Successful");
                login = true;
                $("#modal1").closeModal();
            } else
                $window.alert("login failed");
        });
    }
    $scope.reg = function() {
        $("#modal1").closeModal();
        $('#signup').openModal();
    }
    $scope.register = function(user) {
        var email = user.regemail;
        var pass = user.regpass;
        var confirm = user.regconfirmpass;
        var res = $http.post('/1', user);
        res.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
    }
}]);

var cities = [{
    city: 'Toronto',
    desc: 'This is the best city in the world!',
    lat: 43.7000,
    long: -79.4000
}, {
    city: 'New York',
    desc: 'This city is aiiiiite!',
    lat: 40.6700,
    long: -73.9400
}, {
    city: 'Chicago',
    desc: 'This is the second best city in the world!',
    lat: 41.8819,
    long: -87.6278
}, {
    city: 'Los Angeles',
    desc: 'This city is live!',
    lat: 34.0500,
    long: -118.2500
}, {
    city: 'Las Vegas',
    desc: 'Sin City...\'nuff said!',
    lat: 36.0800,
    long: -115.1522
}];

//Angular App Module and Controller
angular.module('mapsApp', [])
    .controller('MapCtrl', function($scope) {

        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(40.0000, -98.0000),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function(info) {
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }
        for (i = 0; i < cities.length; i++) {
            createMarker(cities[i]);
        }
        $scope.openInfoWindow = function(e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
    });
//car insurance 
angular.module('autohome', [])
    .controller('auto', ['$scope', '$http', '$window', function($scope, $http, $window) {
        angular.element(document).ready(function() {
            var quote = 0;
            $('.slider').slider({
                full_width: true
            });
            $('select').material_select();
        });
        //check the price
        $scope.check = function() {
                var rate = 0;
                var car = $("#car").val();
                var year = $("#year").val();
                var state = $("#state").val();
                var type = $("input[name=group1]:checked").val();
                console.log(type);
                if (car == null || year == null || state == null || type == undefined) {
                    $window.alert("Please Enter Your Details")
                } else {
                    if (car == 'Honda Accord') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 50;
                            } else if (state == 'AR') {
                                rate = 35;
                            } else {
                                rate = 30;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 40;

                            } else if (state == 'NY') {
                                rate = 50;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 35;
                            }
                        }
                    } else if (car == 'toyota rava') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 40;
                            } else if (state == 'AR') {
                                rate = 25;
                            } else {
                                rate = 20;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 30;
                            }
                        }
                    } else if (car == 'Nissan Altima') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 40;
                            } else if (state == 'AR') {
                                rate = 25;
                            } else {
                                rate = 20;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 30;
                            }
                        }
                    } else if (car == 'Honda civic') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 40;
                            } else if (state == 'AR') {
                                rate = 25;
                            } else {
                                rate = 20;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 30;
                            }
                        }
                    } else if (car == 'Mercedes') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 40;
                            } else if (state == 'AR') {
                                rate = 25;
                            } else {
                                rate = 20;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 30;
                            }
                        }
                    } else if (car == 'BMW') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 40;
                            } else if (state == 'AR') {
                                rate = 25;
                            } else {
                                rate = 20;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 30;
                            }
                        }
                    }
                    if (type == 'monthly') {
                        rate = rate * 30;
                    } else if (type == '6monthly') {
                        rate = rate * 183;
                        rate = rate / 4;
                    } else {
                        rate = rate * 365;
                        rate = rate / 6
                    }
                    $scope.rate = rate + '$';
                    quote = rate;
                    rate = 0;
                }
            }
            //purchase button
        $scope.purchase = function() {
            if ($scope.rate == '0$') {
                $window.alert("Please fill up the details first");
            } else {
                var text = JSON.stringify({
                    "rate": quote
                })
                var res = $http.post('/insurance', text);
                res.success(function(data, status, headers, config) {
                    $scope.message = data;
                    console.log(data);
                    $scope.took = 'Done';

                });
            }
        }
    }]);

//bike insurance
angular.module('bikehome', [])
    .controller('auto', ['$scope', '$http', '$window', function($scope, $http, $window) {
        angular.element(document).ready(function() {

            $('.slider').slider({
                full_width: true
            });
            $('select').material_select();
        });
        //check price
        $scope.check = function() {
                var rate = 0;
                var car = $("#car").val();
                var year = $("#year").val();
                var state = $("#state").val();
                var type = $("input[name=group1]:checked").val();
                console.log(type);
                if (car == null || year == null || state == null || type == undefined) {
                    $window.alert("Please Enter Your Details")
                } else {
                    if (car == 'yamaha') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 50;
                            } else if (state == 'AR') {
                                rate = 35;
                            } else {
                                rate = 30;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 40;

                            } else if (state == 'NY') {
                                rate = 50;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 35;
                            }
                        }
                    } else if (car == 'Honda') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 40;
                            } else if (state == 'AR') {
                                rate = 25;
                            } else {
                                rate = 20;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 30;
                            }
                        }
                    } else if (car == 'Ducati') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 40;
                            } else if (state == 'AR') {
                                rate = 25;
                            } else {
                                rate = 20;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 30;
                            }
                        }
                    } else if (car == 'Harley') {
                        if (year == '2013') {
                            if (state == 'CA') {
                                rate = 30;

                            } else if (state == 'NY') {
                                rate = 40;
                            } else if (state == 'AR') {
                                rate = 25;
                            } else {
                                rate = 20;
                            }
                        }
                        if (year == '2014') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 30;
                            } else {
                                rate = 25;
                            }
                        }
                        if (year == '2015') {
                            if (state == 'CA') {
                                rate = 35;

                            } else if (state == 'NY') {
                                rate = 45;
                            } else if (state == 'AR') {
                                rate = 40;
                            } else {
                                rate = 30;
                            }
                        }
                    }
                    if (type == 'monthly') {
                        rate = rate * 30;
                    } else if (type == '6monthly') {
                        rate = rate * 183;
                        rate = rate / 4;
                    } else {
                        rate = rate * 365;
                        rate = rate / 6
                    }
                    $scope.rate = rate + '$';
                    quote = rate;
                    rate = 0;
                }

            }
            //purchase button
        $scope.purchase = function() {
            if ($scope.rate == '0$') {
                $window.alert("Please fill up the details first");
            } else {
                var text = JSON.stringify({
                    "rate": quote
                })
                var res = $http.post('/insurance', text);
                res.success(function(data, status, headers, config) {
                    $scope.message = data;
                    console.log(data);
                    $scope.took = 'Done';

                });
            }
        }
    }]);

//life insurance
angular.module('lifehome', [])
    .controller('auto', ['$scope', '$http', '$window', function($scope, $http, $window) {
        angular.element(document).ready(function() {

            $('.slider').slider({
                full_width: true
            });
            $('select').material_select();
        });
        //check price
        $scope.check = function() {
                var rate = 0;
                var age = $("#age").val();
                var state = $("#state").val();
                var type = $("input[name=group1]:checked").val();
                console.log(type);
                if (age == null || state == null || type == undefined) {
                    $window.alert("Please Enter Your Details")
                } else {
                    if (age == '1') {
                        if (state = 'CA') {
                            rate = 3.0;
                        } else if (state == 'NY') {
                            rate = 3.2;
                        } else if (state == 'AR') {
                            rate = 2.5;
                        } else if (state == 'NE') {
                            rate = 2.2;
                        }
                    } else if (age == '2') {
                        if (state = 'CA') {
                            rate = 3.28;
                        } else if (state == 'NY') {
                            rate = 3.3;
                        } else if (state == 'AR') {
                            rate = 2.8;
                        } else if (state == 'NE') {
                            rate = 2.5;
                        }
                    } else if (age == '3') {
                        if (state = 'CA') {
                            rate = 3.5;
                        } else if (state == 'NY') {
                            rate = 3.7;
                        } else if (state == 'AR') {
                            rate = 3.0;
                        } else if (state == 'NE') {
                            rate = 2.7;
                        }
                    } else if (age == '4') {
                        if (state = 'CA') {
                            rate = 2.8;
                        } else if (state == 'NY') {
                            rate = 2.9;
                        } else if (state == 'AR') {
                            rate = 2.5;
                        } else if (state == 'NE') {
                            rate = 2.4;
                        }
                    }
                    if (type == 'monthly') {
                        rate = rate * 30;
                    } else if (type == '6monthly') {
                        rate = rate * 183;
                    } else {
                        rate = rate * 365;
                    }

                }

                $scope.rate = '$' + rate;
                quote = rate;
                rate = 0;
            }
            //purchase button
        $scope.purchase = function() {
            if ($scope.rate == '0$') {
                $window.alert("Please fill up the details first");
            } else {
                var text = JSON.stringify({
                    "rate": quote
                })
                var res = $http.post('/insurance', text);
                res.success(function(data, status, headers, config) {
                    $scope.message = data;
                    console.log(data);
                    $scope.took = 'Done';

                });
            }
        }
    }]);