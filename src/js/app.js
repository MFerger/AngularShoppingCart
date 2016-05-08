var angular = require('angular');
require('angular-ui-router');


var HomeController = require('./controllers/HomeController');
var cartListController = require('./controllers/cartListController');
var ProductService = require('./services/ProductService');
var cartListDirective = require('./directives/cartListDirective');
var productListDirective = require('./directives/productListDirective');
var searchBarDirective = require('./directives/searchBarDirective');
var checkMark = require('./filters/filters');
var Router = require('./router');

angular
  .module('app', ['ui.router','checkMark'])
  .service('ProductService', ProductService)
  .controller( 'HomeController', HomeController )
  .controller( 'cartListController', cartListController )
  .directive( 'productListDirective', productListDirective)
  .directive( 'cartListDirective', cartListDirective)
  .directive( 'searchBarDirective', searchBarDirective)
  .config( Router );
