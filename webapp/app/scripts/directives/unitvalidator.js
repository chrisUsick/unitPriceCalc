'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:unitValidator
 * @description
 * # unitValidator
 */
angular.module('webappApp')
  .directive('unitValidator', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the unitValidator directive');
      }
    };
  });
