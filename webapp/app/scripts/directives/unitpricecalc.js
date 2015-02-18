'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:unitPriceCalc
 * @description
 * # unitPriceCalc
 */
angular.module('webappApp')
  .directive('unitPriceCalc', function () {
    return {
      templateUrl: 'views/directives/unit-price-calc.html',
      restrict: 'E',
      scope:{
      	data:'=',
      	units:'='
      },
      link: function postLink(scope, element, attrs) {
      	function calcPrice (){
      		scope.data.unitPrice = scope.data.price / scope.data.quantity;
      	}
      	scope.data.calcPrice = calcPrice;
      	/*scope.$watch('data.quantity', function (newVal){
      		if (newVal){
						// split on spaces
	      		var pieces = newVal.trim().split(' ');

	      		var num = parseFloat(pieces[0]);
	      		scope.data.qtyNum = num;

	      		// join using the same method used to split
	      		scope.data.unit = pieces.splice(1).join(' ');
	      		calcPrice();
      		}
      		calcPrice()
      		
      	});*/

      	/*scope.$watch('data.price', function (newVal){
      		calcPrice();
      	})*/
      }
    };
  });
