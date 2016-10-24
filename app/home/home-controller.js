(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl)
    .controller('LeftCtrl', LeftCtrl);

  function HomeCtrl($timeout, $mdSidenav, $log, RadiusService) {
    // RadiusService.getAtlasEntities();
    // RadiusService.getAtlasLineage();
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    vm.settings = {
      printLayout: true,
      showRuler: true,
      showSpellingSuggestions: true,
      presentationMode: 'edit'
    };
    vm.toggleLeft = buildToggler('left');
    vm.isOpenLeft = function () {
      return $mdSidenav('left').isOpen();
    };
    function buildToggler(navID) {
      return function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug('toggle ' + navID + ' is done');
          });
      };
    }
  }
  function LeftCtrl($timeout, $mdSidenav, $log) {
    var vm = this;
    vm.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close Left is done');
        });
    };
  }
}());
