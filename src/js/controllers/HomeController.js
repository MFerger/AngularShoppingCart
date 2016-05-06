
var HomeController = function(ProductService){
  var vm = this;
  vm.products = ProductService.getAllProducts();
  vm.cart = ProductService.getCart();
  vm.addToCart = ProductService.addToCart;

};


HomeController.$inject = ['ProductService'];
module.exports = HomeController;
