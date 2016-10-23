(function () {
  'use strict';

  angular
    .module('home.landedData')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home.landedData', {
        url: '/landed-data',
        templateUrl: 'home/landed-data/landed-data.tpl.html',
        controller: 'LandedDataCtrl',
        controllerAs: 'landedData'
      });
  }
}());
