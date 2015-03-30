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
    		'click .add-link' : 'add',
    		'click .vehicle-link' : 'show',
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

		show: function(e) {
			var id = $(e.currentTarget).data('id');
			EventsHandler.GlobalNotifications.trigger('navigate', 'vehicle/' + id);
        }
	});
	
	return View;
});