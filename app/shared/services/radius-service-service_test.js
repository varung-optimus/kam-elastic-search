/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('RadiusService', function () {
  var service;

  beforeEach(module('kamElasticSearch'));

  beforeEach(inject(function (RadiusService) {
    service = RadiusService;
  }));

  it('should equal RadiusService', function () {
    expect(service.get()).toEqual('RadiusService');
  });
});
