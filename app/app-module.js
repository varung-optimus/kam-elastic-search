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
      'home',
      'md.data.table',
      'elasticui',
      'elasticsearch'
    ]).config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default');
    });
}());
