define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/EventsHandler',
    'text!templates/vehicleListTemplate.html',
    'app/collections/VehicleCollection'
], function($, _, Backbone, EventsHandler, vehicleListTemplate, VehicleCollection) {
	var View = Backbone.View.extend({

		events: {
    		'click #add' : 'navigate',
    		'click #vehicle' : 'navigate',
    		'click #edit' : 'navigate'
    	},
    	
    	initialize: function() {
    		this.render();
    	},

	
		render: function () {
			var self = this;
			var vehicles = new VehicleCollection();

			vehicles.fetch({
	            success: function () {           	
	    			var compiledTemplate = _.template(vehicleListTemplate, { collection: vehicles });
	            	self.$el.html(compiledTemplate);
	            	$('#mainPage').trigger('create');
	            },
	            error: function () {
	                self.trigger('errorOnFetch');
	            }
			});
					
			return this;
		},

		navigate: function(e) {
        	var route = $(e.currentTarget).data('router');
			EventsHandler.GlobalNotifications.trigger('navigate', route);
        }
	});
	
	return View;
});