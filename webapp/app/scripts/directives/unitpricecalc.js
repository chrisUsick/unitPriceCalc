'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:unitPriceCalc
 * @description
 * # unitPriceCalc
 */
angular.module('webappApp')
  .directive('unitPriceCalc', ['UnitPrice', '$rootScope', function (UnitPrice, $rootScope) {
    return {
      templateUrl: 'views/directives/unit-price-calc.html',
      restrict: 'E',
      scope:{
      	data:'=',
      	units:'=',
        defaultUnits:'=',
        form:'='
      },
      tranclude:true,
      link: function postLink(scope, element, attrs, ctrl) {
      	
      	/*scope.$watch('data.price', function (newVal){
      		calcPrice();
      	})*/

        // watch the individual units value to set default units
        // if it isn't already set
        scope.$watch('data.units', function (newVal){
          if (!scope.defaultUnits) {
            scope.data.defaultUnits = newVal;
            scope.defaultUnits = newVal;
          }
        });

        // watch defaultUnits to propagate changes to unitPrice objects
        scope.$watch('defaultUnits', function(newVal){
         if (!scope.data.defaultUnits ) {
           scope.data.defaultUnits = newVal;
           // revalidate units
           $rootScope.$broadcast('unitRevalidate');
         }
          
        });
      }
    };
  }]);
