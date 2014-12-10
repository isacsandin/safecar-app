define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/EventsHandler',
    'text!templates/navigationTemplate.html'
], function($, _, Backbone, EventsHandler, navigationTemplate) {
    var View = Backbone.View.extend({
    	
    	events: {
    		'click a.nav-link' : 'navigate'
    		
    	},
    	
        initialize: function() {
        },

        render: function() {
            var template = _.template(navigationTemplate);
            this.$el.html(template);

            return this;
        },
        
        navigate: function(e) {
        	var route = $(e.currentTarget).data('router');
			EventsHandler.GlobalNotifications.trigger('navigate', route);
        }
    });

    return View;
});