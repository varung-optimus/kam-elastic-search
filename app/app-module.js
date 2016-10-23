(function () {
  'use strict';

  /* @ngdoc object
   * @name kamElasticSearch
   * @description
   *
   */
  angular
    .module('kamElasticSearch', [
      'ngMaterial',
      'ui.router',
      'home'
    ]).config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('orange')
        .backgroundPalette('indigo');
    });
} ());
