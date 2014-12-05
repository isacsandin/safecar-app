require.config({
    baseUrl: 'js',
    paths: {
        'jquery': '../libs/jquery/jquery.min',
        'backbone': '../libs/backbone/backbone-min',
        'underscore': '../libs/underscore/underscore-min',
        'jquerymobile': '../libs/jquery.mobile-1.4.4/jquery.mobile-1.4.4',
        'app': './app',
        'templates': '../templates',
    },
    shim: {
      underscore: {
          exports: "_"
      },
      backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      }
  }
});

require([
  "jquery",
  "backbone",
  "app/routers/Router",        
  "app/helpers/jQmInit"
], function ($, Backbone, Router) {

  require([ "jquerymobile" ], function (JQueryMobile) {
    this.router = new Router();
    Backbone.history.start();
  });

});