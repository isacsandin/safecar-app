define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/EventsHandler',
    'text!templates/vehicleTemplate.html'
], function($, _, Backbone, EventsHandler, vehicleTemplate) {
	var View = Backbone.View.extend({

		events: {
			'click #edit' : 'navigate'
		},

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(vehicleTemplate));
			return this;
		},

		navigate: function(e) {
        	var route = $(e.currentTarget).data('router');
			EventsHandler.GlobalNotifications.trigger('navigate', route);
        }

	});
	
	return View;
});