'use strict';

describe('Directive: unitValidator', function () {

  // load the directive's module
  beforeEach(module('webappApp'));

  var 
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function () {
    // expect(element.text()).toBe('this is the unitValidator directive');
  }));
});
