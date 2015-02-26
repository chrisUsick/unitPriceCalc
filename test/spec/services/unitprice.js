'use strict';

describe('Service: unitPrice', function () {

  // load the service's module
  beforeEach(module('unitPriceCalcApp'));

  // instantiate service
  var unitPrice;
  beforeEach(inject(function (_unitPrice_) {
    unitPrice = _unitPrice_;
  }));

  it('should do something', function () {
    expect(!!unitPrice).toBe(true);
  });

});
