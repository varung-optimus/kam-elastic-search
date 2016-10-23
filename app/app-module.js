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
      'elasticui',
      'elasticsearch',
      'home'
    ]).config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink')
        .backgroundPalette('blue-grey');
    });
}());
