define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone) {

    var Handler = {};
    Handler.GlobalNotifications = _.extend({}, Backbone.Events);

    return Handler;
});