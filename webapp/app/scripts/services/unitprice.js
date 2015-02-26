'use strict';

/**
 * @ngdoc service
 * @name webappApp.unitPrice
 * @description
 * # unitPrice
 * Factory in the webappApp.
 */
angular.module('webappApp')
  .factory('UnitPrice', function () {
    

    function UnitPrice (id) {
      this.id = id;
      /*this.price = 0;
      this.quantity = 0;
      this.unitPrice = this.price/this.quantity;*/
      this.units = undefined;
      this.defaultUnits = undefined;
    }

    UnitPrice.prototype.calcPrice = function() {
      if (!this.defaultUnits) {
        this.unitPrice = this.price / this.quantity;
      } else {
        // do complex calculation
        var qDefault = Qty(this.defaultUnits);
        // convert quantity to default units
        var newQty = Qty((this.units || qDefault.units())).mul(this.quantity).to(qDefault.units());

        this.unitPrice = this.price / newQty.scalar;

        // set the unit price to be based on the defaultUnits value
        // e.g. defaultUnits: 100 g
        this.unitPrice *= qDefault.scalar;
      }
      return this.unitPrice;
    }; 
    // Public API here
    return UnitPrice;
  });
