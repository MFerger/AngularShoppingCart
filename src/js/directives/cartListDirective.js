var cartListDirective = function() {
  return {
    restrict: 'E',
    template: '@@import _cart-list.html',
    controllerAs: 'vm',
    controller: 'cartListController'
  }
};

module.exports = cartListDirective;
