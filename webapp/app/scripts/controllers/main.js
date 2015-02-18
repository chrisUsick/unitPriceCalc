'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location) {
  	var defaults = $scope.defaults = $rootScope.defaults = {
  		prices: [
	    	{id:1},
	    	{id:2}
    	],
    	useUnits: false
    };

    $rootScope.prices = $rootScope.prices || defaults.prices;
    $rootScope.shared.useUnits = $rootScope.shared.useUnits || defaults.useUnits;

    $scope.reset = function() {
    	$rootScope.prices = defaults.prices;
    };

    $scope.calculate = function (){
    	$rootScope.prices.forEach(function (val){
    		val.calcPrice();
    	});
    	$location.path('/summary');
    };
  });
