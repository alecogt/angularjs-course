(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/items-list.html',
  bindings: {
    items: '<'
  }
});

})();
