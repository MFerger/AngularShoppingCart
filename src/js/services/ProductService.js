var AppStoreFactory = function(){
  var products = require('../products.json');
  var cart = [];
  
  return{
    getAllProducts: function(){
      return products;
    },
    getCart: function(){
      return cart;
    },
    addToCart: function(n, id){

      for(var i=1; i <= n; i++){

        products.filter(function(x){
          if(x._id === id){
            cart.push(x);
          }
        });

      }


    }
  }
};

module.exports = AppStoreFactory;
