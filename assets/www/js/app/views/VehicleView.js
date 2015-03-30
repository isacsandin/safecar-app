define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/EventsHandler',
    'text!templates/vehicleTemplate.html',
    'app/models/VehicleModel'
], function($, _, Backbone, EventsHandler, vehicleTemplate, VehicleModel) {
	var View = Backbone.View.extend({

		events: {
			'click #edit' : 'navigate'
		},

		initialize: function (options) {
			this.vehicle = new VehicleModel();
			
			if(options.id != null) {
				this.vehicle.set('id', options.id);
				this.vehicle.fetch({
					sucess: function(){ alert("alan gostosao " + vehicle.get("license_plate"));}
				});
			}
			
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(vehicleTemplate, { vehicle: this.vehicle }));
			return this;
		},

		navigate: function(e) {
        	var route = $(e.currentTarget).data('router');
			EventsHandler.GlobalNotifications.trigger('navigate', route);
        }

	});
	
	return View;
});