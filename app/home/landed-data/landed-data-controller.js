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

    // function searchNameInAtlasEntities(item) {
    //   for (var index in vm.atlasEntities) {
    //     if (vm.atlasEntities[index].id === item) {
    //       return vm.atlasEntities[index].name;
    //     }
    //   }
    // }

    // function onGetAtlasLineageSuccessCallback(response) {
    //   var edges = response.data.results.values.edges;
    //   var vertices = response.data.results.values.vertices;
    //   vm.atlasLineageConnects = [];
    //   // Prepare dictionary of connections
    //   for (var item in edges) {
    //     var name = searchNameInAtlasEntities(item);
    //     var icon = 'gear';

    //     if (name.indexOf('table') !== -1) {
    //       icon = 'table';
    //     }
    //     vm.atlasLineageConnects[item] = {
    //       icon: icon,
    //       name: name,
    //       connections: []
    //     };
    //     // Get connections
    //     for (var connectionIndex in edges[item]) {
    //       var connectionName = searchNameInAtlasEntities(edges[item][connectionIndex]);
    //       vm.atlasLineageConnects[item].connections.push({
    //         id: edges[item][connectionIndex],
    //         name: connectionName
    //       });
    //     }
    //   }

    //   // Prepare final lineage graph model
    //   prepareLineageGraphModel(vm.atlasLineageConnects);

    // }

    // function onGetAtlasEntitiesSuccessCallback(response) {
    //   for (var item in response.data) {
    //     if (response.data[item].name === 'cur_hive_table1') {
    //       vm.curHiveTableId = response.data[item].id;
    //       vm.atlasEntities = response.data;
    //       // Once found, get lineage data
    //       RadiusService.getAtlasLineage(vm.curHiveTableId, onGetAtlasLineageSuccessCallback)
    //     }
    //   }
    // }
    // RadiusService.getAtlasEntities(onGetAtlasEntitiesSuccessCallback);
  }
}());
