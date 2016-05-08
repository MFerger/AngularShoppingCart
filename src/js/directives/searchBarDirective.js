var searchBarDirective = function(){
  return{
    restrict: 'E',
    scope: {
      cartQtyTotal: '=',
      searchTheName: '=',
      categories: '=',
      prices: '='
    },
    template: '@@import _search-bar.html'
  }
};

module.exports = searchBarDirective;
