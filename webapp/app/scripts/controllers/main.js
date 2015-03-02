'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, UnitPrice) {
  	var defaults = $scope.defaults = $rootScope.defaults = {
  		prices: [
	    	new UnitPrice(1),
	    	new UnitPrice(2)
    	],
    	useUnits: false
    };

    $rootScope.prices = $rootScope.prices || defaults.prices;
    $rootScope.shared.useUnits = $rootScope.shared.useUnits || defaults.useUnits;

    $scope.UnitPrice = UnitPrice;

    $scope.addUnitPrice = function() {
      $rootScope.prices.push(new UnitPrice($rootScope.prices.length + 1));
    };

    $scope.reset = function() {
    	$rootScope.prices = defaults.prices;
    };

    $scope.calculate = function (){
    	$rootScope.prices.forEach(function (val){
    		val.calcPrice();
    	});
    	$location.path('/summary');
    };

    console.log($scope.form);
  });
