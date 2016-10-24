(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name kamElasticSearch.service:RadiusService
   *
   * @description
   *
   */
  angular
    .module('kamElasticSearch')
    .service('RadiusService', RadiusService);

  function RadiusService($http, $base64) {
    // var self = this;

    var ATLAS_API = {
      ALL_ENTITIES: '/api/atlas/v1/entities',
      LINEAGE: '/api/atlas/lineage/{entityId}/inputs/graph'
    };

    var METHODS = {
      POST: 'POST',
      GET: 'GET'
    };

    var JSON = 'application/json';

    this.getAtlasEntities = function (onSuccessCallback) {
      var auth = $base64.encode('admin:admin');
      var headers = { 'Authorization': 'Basic ' + auth }
      var req = {
        method: METHODS.GET,
        url: ATLAS_API.ALL_ENTITIES,
        headers: headers
      }
      $http(req)
        .then(
        onSuccessCallback,
        function (response) {
          console.log(response);
          // toastr.error(response.data.message);
        });
    };

    this.getAtlasLineage = function (entityId, onSuccessCallback) {
      var auth = $base64.encode('admin:admin');
      var headers = { 'Authorization': 'Basic ' + auth }
      var req = {
        method: METHODS.GET,
        url: ATLAS_API.LINEAGE.replace('{entityId}', entityId),
        headers: headers
      }
      $http(req)
        .then(
        onSuccessCallback,
        function (response) {
          console.log(response);
          // toastr.error(response.data.message);
        });
    };
  }
}());
