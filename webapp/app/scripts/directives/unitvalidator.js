'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:unitValidator
 * @description
 * # unitValidator
 */
angular.module('webappApp')
  .directive('unitValidator', function ($rootScope) {
    return {
    	require:'ngModel',
      restrict: 'A',
      link: function postLink(scope, element, attrs, ctrl) {
        // listen for the unitRevalidate broadcast
        $rootScope.$on('unitRevalidate', function(){
          ctrl.$validate();
        });
      	ctrl.$validators.unitValidator = function(modelVal, viewVal) {
      		var success;
          // console.log(element, ctrl);
          // console.log(attrs);
      		try {
      			if (modelVal.length !== 0) {
	      			var qty = new Qty(modelVal);
              if (attrs.unitValidator && attrs.unitValidator !== ''){
                success = qty.isCompatible(Qty(attrs.unitValidator));
                console.log('isCompatible', success);
              } else {
                success = true;
              }
      			}
            
      		} catch (e){
      			if (e instanceof Qty.Error) {
      				console.log('unit validatioin error', e);
      				success = false;
      			}
      		}

      		return success;
      	};
      }
    };
  });
