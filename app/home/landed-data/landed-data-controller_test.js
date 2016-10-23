/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LandedDataCtrl', function () {
  var ctrl;

  beforeEach(module('home.landedData'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('LandedDataCtrl');
  }));

  it('should have ctrlName as LandedDataCtrl', function () {
    expect(ctrl.ctrlName).toEqual('LandedDataCtrl');
  });
});
