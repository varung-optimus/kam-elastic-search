/* global describe, beforeEach, it, browser, expect */
'use strict';

var LandedDataPagePo = require('./landed-data.po');

describe('Landed data page', function () {
  var landedDataPage;

  beforeEach(function () {
    landedDataPage = new LandedDataPagePo();
    browser.get('/#/landed-data');
  });

  it('should say LandedDataCtrl', function () {
    expect(landedDataPage.heading.getText()).toEqual('landedData');
    expect(landedDataPage.text.getText()).toEqual('LandedDataCtrl');
  });
});
