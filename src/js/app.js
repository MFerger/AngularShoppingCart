var angular = require('angular');
require('angular-ui-router');


var HomeController = require('./controllers/HomeController');
var AboutController = require('./controllers/AboutController');
var ProductService = require('./services/ProductService');
var Router = require('./router');

angular
  .module('app', ['ui.router'])
  .service('ProductService', ProductService)
  .controller( 'HomeController', HomeController )
  .controller( 'AboutController', AboutController )
  .config( Router );
