'use strict';

/* Controllers */

angular.module('ramacenApp.controllers', [])
  


  
  //==========================================================
  // MAIN
  .controller('MainCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    
  }])


  

  //==========================================================
  // MAIN
  .controller('BreadcrumbCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  }])




  //==========================================================
  // HOME
  .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('items/items.json').success(function(data) {
      $scope.items = data;
    });

    $scope.filter = function(val){
      $scope.query = val;
    }

    $scope.order = [
      { name:'Alfabético', value:'name' },
      { name:'Menor Precio', value:'age' },
      { name:'Mayor Precio', value:'id' },
      { name:'Destacados', value:'snippet' }
    ];
    //$scope.selectOrder = $scope.order[0].value; 

    $scope.maxSize = 4;
    $scope.bigTotalItems = 22;
    $scope.bigCurrentPage = 1;

  }])





  //==========================================================
  // CATEGORIES
  .controller('CategoryCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $http.get('items/categories.json').success(function(data) {
      $scope.categories = data['ar'];
    });
  }])


  
  

  //==========================================================
  // DETAIL
  .controller('DetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $http.get('items/' + $routeParams.itemId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }])
  




  //==========================================================
  // FOOTER
  .controller('FooterCtrl', ['$scope', function($scope) {

  }])




  //==========================================================
  // NAVIGATION
  .controller('NavCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  	// JSon navbars data
  	console.log("Loading Json....");
    $http.get('/items/nav.json').success(function(data) {
      $scope.navs = data;
      console.log("Json Loaded!");
    });    
  }])




  //==========================================================
  // CAROUSEL
  .controller('CarouselDemoCtrl', ['$scope', function($scope) {
  	$scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 601 + slides.length;
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


