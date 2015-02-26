'use strict';

describe('Service: unitPrice', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var UnitPrice;
  beforeEach(inject(function (_UnitPrice_) {
    UnitPrice = _UnitPrice_;
  }));

  it('construct a unit Price', function () {

    console.log(UnitPrice);
    var x = new UnitPrice(1);
    expect(true).toBeTruthy();
    expect(x).toBeTruthy();
    expect(x.constructor).toBe(UnitPrice);
  });

  it('should a calculate a unit price with all data', function (){
    var up = new UnitPrice(1);
    up.price = 50;
    up.quantity = 1.2;
    up.units = 'kg';
    up.defaultUnits = '100 g';

    var unitPrice = up.calcPrice();
    expect(Math.round(unitPrice*100)/100).toBe(Math.round((50/1.2/10)*100)/100);
  });
});
