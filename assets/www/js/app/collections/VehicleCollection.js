define([
	'backbone',
	'app/models/VehicleModel'
], function(Backbone, VehicleModel) {
	var VehicleCollection = Backbone.Collection.extend({
		model: VehicleModel
	});
	
	return VehicleCollection;
});