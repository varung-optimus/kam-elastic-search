/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('euiHost', function () {
  var constant;

  beforeEach(module('kamElasticSearch'));

  beforeEach(inject(function (euiHost) {
    constant = euiHost;
  }));

  it('should equal 0', function () {
    expect(constant).toBe(0);
  });
});
