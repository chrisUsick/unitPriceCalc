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

    $scope.startHelp = function () {
      var intro = introJs();
      intro.setOptions({
        steps: [
          {intro:'Welcome to Unit Price Calculator.'},
          {
            element:$('form[name="form"]')[0],
            intro:'Enter the information to calculate unit prices here.',
            position:'bottom'
          },
          {
            element:$('form label')[0],
            intro: 'You can add units to your calculation. Click next to get help on using units.',
            position:'right'
          },
          {
            element:$('form input[name="defaultUnits"]')[0],
            intro: 'Here are the units that will be used in the output. E.g. <a id="helperDefaultUnits">100 g</a>'
          },
          {
            element:$('form input[name="units"]')[0],
            intro: 'Enter any units that are compatible to the default units. If there isn\'t a default unit set, the default unit is selected from the first unit you specify',
            position:'left'
          },
          {
            element: $('form #add')[0],
            intro: 'You can compare more than 2 units.',
            position:'top'
          },
          {
            element: $('form button[type="submit"]')[0],
            intro: 'You\'re finished! Click calculate to view the calculated and converted unit prices',
            position:'top'
          }
        ]
      });

      intro.start();
      $('body').on('click', '#helperUseUnits', function (e){
        $rootScope.shared.useUnits = true;
        $rootScope.$apply();
      });

      intro.onchange(function (target){
        console.log(target);
        if ($(target).attr('name') == 'defaultUnits'){
            $rootScope.shared.useUnits = true;
            $rootScope.$apply();
        }
      })

      intro.oncomplete(function (){
        var p1 = $rootScope.prices[0];
        var p2 = $rootScope.prices[1];
        p1.price = 2.50;
        p1.quantity = 4;
        p1.units = 'oz';

        p2.price = 9.50;
        p2.quantity = 0.95;
        p2.units = 'kg';

        $rootScope.$apply();
      })

      $('body').on('click', '#helperDefaultUnits', function (e) {
        $rootScope.shared.defaultUnits = '100 g';
        $rootScope.$apply();
      });
    };

  });
