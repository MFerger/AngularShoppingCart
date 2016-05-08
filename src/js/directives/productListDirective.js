var productListDirective = function(){
  return{
    restrict: 'E',
    scope: {
      products: '=',
      isInStock: '=',
      searchTheName: '=',
      addToCart: '=',
      categories: '=',
      prices: '='
    },
    template: '@@import _product-list.html'
  }
};

module.exports = productListDirective;
