
var AboutController = function(ProductService){
  var vm = this;

  vm.cart = ProductService.getCart();
  vm.addToCart = ProductService.addToCart;

  vm.title = 'About'
};

AboutController.$inject = ['ProductService'];
module.exports = AboutController;
