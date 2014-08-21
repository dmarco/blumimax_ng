'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('ramacenApp.services', [])
	
	.factory('Item', ['$resource', function($resource){
    return $resource('items/:itemId.json', {}, {
      query: {method:'POST', params:{itemId:'items'}, isArray:true}
    });
  }]);