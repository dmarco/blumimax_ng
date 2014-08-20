'use strict';

/* Controllers */

angular.module('ramacenApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('FooterCtrl', ['$scope', function($scope) {

  }])
  .controller('NavCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  	// JSon navbars data
  	console.log("Loading Json....");
    $http.get('/items/nav.json').success(function(data) {
      $scope.navs = data;
      console.log("Json Loaded!");
    });    
  }])
  .controller('CarouselDemoCtrl', ['$scope', function($scope) {
  	$scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length;
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/300',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }
  }]);


