(function () {
  'use strict';

  angular
    .module('home.landedData')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home.landedData', {
        // url: '/landed-data',
        templateUrl: 'home/landed-data/landed-data.tpl.html',
        controller: 'LandedDataCtrl',
        controllerAs: 'landedData'
      })
      .state('home.landedData.hdfsTab', {
        templateUrl: 'home/landed-data/partials/_hdfs-tab.html'
      })
      .state('home.landedData.hiveTab', {
        templateUrl: 'home/landed-data/partials/_hive-tab.html'
      });
  }
}());
