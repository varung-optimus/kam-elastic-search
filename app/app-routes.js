(function () {
  'use strict';

  angular
    .module('kamElasticSearch')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
