
var HomeController = function(ProductService, $interval){
  var vm = this;
  vm.products = ProductService.getAllProducts();

  $interval(function(){
    vm.cartQtyTotal = ProductService.cartQty();
  }, 100);

  vm.isInStock = function(bool){
    return bool ? 'green' : 'red';
  }
  
  vm.addToCart = ProductService.addToCart;

};


HomeController.$inject = ['ProductService', '$interval'];
module.exports = HomeController;
