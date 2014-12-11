define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/EventsHandler',
    'text!templates/vehicleListTemplate.html'
], function($, _, Backbone, EventsHandler, vehicleListTemplate) {
	var View = Backbone.View.extend({

		events: {
    		'click #save' : 'navigate',
    		'click #vehicle' : 'navigate',
    		'click #edit' : 'navigate'
    	},

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(vehicleListTemplate));
			return this;
		},

		navigate: function(e) {
        	var route = $(e.currentTarget).data('router');
			EventsHandler.GlobalNotifications.trigger('navigate', route);
        }
	});
	
	return View;
});