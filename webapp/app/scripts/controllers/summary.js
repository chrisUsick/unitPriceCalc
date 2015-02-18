'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('SummaryCtrl', function ($rootScope, $scope, $filter, $location, ngTableParams) {
  	console.log($rootScope.shared.useUnits);
    $scope.tableParams = new ngTableParams({
    	page:1,
    	count:5,
    	sorting: {
    		unitPrice:'asc'
    	}
    }, {
    	total: ($rootScope.prices) ? $rootScope.prices.length : 0,
    	// total: 0,
    	counts: [],

    	getData: function ($defer, params) {
    		var data = $rootScope.prices;
    		var orderedData = params.sorting() ?
    			$filter('orderBy')(data, params.orderBy()) :
    			data;
    		$defer.resolve(orderedData);
    	}
    });

	  $scope.back = function (preserveData){
	  	/* jshint curly: false */ 
	  	if (!preserveData && $rootScope.prices) $rootScope.prices = $rootScope.defaults.prices;
	  	$location.path('/');
	  };
  });
