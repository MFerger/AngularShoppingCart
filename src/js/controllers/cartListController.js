
var cartListController = function(ProductService){
  var vm = this;

  vm.cart = ProductService.getCart();
  vm.addToCart = ProductService.addToCart;
  vm.removeFromCart = ProductService.removeFromCart;
  vm.increaseQty = ProductService.increaseQty;
  vm.decreaseQty = ProductService.decreaseQty;
  vm.total = ProductService.cartTotal();
};

cartListController.$inject = ['ProductService'];
module.exports = cartListController;
