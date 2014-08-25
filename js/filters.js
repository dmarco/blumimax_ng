'use strict';

/* Filters */

angular.module('ramacenApp.filters', [])

	.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])

  .filter('nospace', function () {
		return function (value) {
			return (!value) ? '' : value.replace(/ /g, '-');
		};
	})

	.filter('yesspace', function () {
		return function (value) {
			return (!value) ? '' : value.replace(/-/g, ' ');
		};
	})

	.filter('noaccents', function () {
		return function (s) {
			var r = s.toLowerCase();
          r = r.replace(new RegExp(/[àáâãäå]/g),"a");
          r = r.replace(new RegExp(/[èéêë]/g),"e");
          r = r.replace(new RegExp(/[ìíîï]/g),"i");
          r = r.replace(new RegExp(/ñ/g),"n");                
          r = r.replace(new RegExp(/[òóôõö]/g),"o");
          r = r.replace(new RegExp(/[ùúûü]/g),"u");
          return r;
		};
	});

