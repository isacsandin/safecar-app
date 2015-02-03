define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/vehicleEditTemplate.html',
    'app/models/VehicleModel'
], function($, _, Backbone, vehicleEditTemplate, VehicleModel) {
	var View = Backbone.View.extend({
			
		events: {
    		'click #save' : 'save'
    	},

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(vehicleEditTemplate));
			return this;
		},

		save: function() {
			var vehicle = new VehicleModel;
			
			vehicle.set({
				license_plate: this.$el.find('#license_plate').val(),
				identifier: this.$el.find('#identifier').val(),
				brand: this.$el.find('#brand').val(),
				model: this.$el.find('#model').val(),
				color: this.$el.find('#color').val(),
				notes: this.$el.find('#notes').val(),
				year: this.$el.find('#year').val()
			});			
			
			vehicle.save();
        }
	});
	
	return View;
});