define([
	'backbone',
	'app/models/VehicleModel'
], function(Backbone, VehicleModel) {
	var VehicleCollection = Backbone.Collection.extend({
		model: VehicleModel,
		url: 'http://192.168.1.113:3000/api/v1/vehicles/'
	});
	
	return VehicleCollection;
});