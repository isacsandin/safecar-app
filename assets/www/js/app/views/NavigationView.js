define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/navigationTemplate.html'
], function($, _, Backbone, navigationTemplate) {
    var View = Backbone.View.extend({
        initialize: function() {
        },

        render: function() {
            var template = _.template(navigationTemplate);
            this.$el.html(template);

            return this;
        }
    });

    return View;
});