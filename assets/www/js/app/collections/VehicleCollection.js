define([
	'backbone',
	'app/models/VehicleModel'
], function(Backbone, VehicleModel) {
	var VehicleCollection = Backbone.Collection.extend({
		model: VehicleModel,
		url: 'http://safecar.herokuapp.com/api/v1/vehicles/'
	});
	
	return VehicleCollection;
});