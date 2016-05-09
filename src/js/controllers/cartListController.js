
var cartListController = function(ProductService, $interval){
  var vm = this;

  vm.cart = ProductService.getCart();
  vm.addToCart = ProductService.addToCart;
  vm.removeFromCart = ProductService.removeFromCart;
  vm.increaseQty = ProductService.increaseQty;
  vm.decreaseQty = ProductService.decreaseQty;
  
  $interval(function(){
  vm.total = ProductService.cartTotal();
}, 100);

};

cartListController.$inject = ['ProductService', '$interval'];
module.exports = cartListController;
