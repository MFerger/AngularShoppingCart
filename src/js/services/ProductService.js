var AppStoreFactory = function(){
  var products = require('../products.json');
  var cart = [];

  var removeItem = function(id){
    cart.map(function(x, i){
      if(x.item._id === id){
        cart.splice(i, 1);
      }
    });
  };

  var addItem = function(item, qty){
    cart.push({
      item: item,
      qty: qty
    })
  };

  var matchCartItemID = function(id) {
    var itemID = '';
    cart.map(function(x) {
      if (x.item._id == id) itemID = x.item._id;
    });
    return itemID;
  };

  var editCartQty = function(action, qty, id){
    cart.map(function(x){
      if(x.item._id === id){
        switch(action){
          case 'ADD_MORE':
            x.qty = +x.qty + +qty;
            break;
          case 'INCREASE':
            x.qty++;
            break;
          case 'DECREASE':
            x.qty--;
            if(x.qty < 1)
              removeItem(x.item._id);
            break;
        }
      }
    });
  };

  return{
    getAllProducts: function(){
      return products;
    },
    getCart: function(){
      return cart;
    },
    addToCart: function(qty, item){
      if(!qty) qty = 1;
      var productItemID = item._id;
      var cartItemID = matchCartItemID(productItemID);
      if(cartItemID === productItemID){
        editCartQty('ADD_MORE', qty, productItemID);
      } else {
        addItem(item, qty);
      }
    },
    removeFromCart: function(id){
      removeItem(id)
    },
    increaseQty: function(id){
      editCartQty('INCREASE', null, id);
    },
    decreaseQty: function(id){
      editCartQty('DECREASE', null, id);
    },
    cartTotal: function(){
      var total = 0;
      cart.map(function(x){
        total += x.qty * x.item.price;
      });
      return total;
    },
    cartQty: function(){
      var qty = 0;
      cart.map(function(x){
        qty = +qty + +x.qty;
      });
      return qty;
    }
  }
};

module.exports = AppStoreFactory;
