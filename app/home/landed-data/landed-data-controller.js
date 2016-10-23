(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.landedData.controller:LandedDataCtrl
   *
   * @description
   *
   */
  angular
    .module('home.landedData')
    .controller('LandedDataCtrl', LandedDataCtrl);

  function LandedDataCtrl() {
    var vm = this;
    vm.ctrlName = 'LandedDataCtrl';
    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
  }
}());
