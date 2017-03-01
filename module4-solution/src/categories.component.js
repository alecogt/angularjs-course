(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/categories-list.html',
  bindings: {
    categories: '<'
  }
});

})();
