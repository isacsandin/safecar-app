define([
	'backbone'
], function(Backbone) {
	var VehicleModel = Backbone.Model.extend({
		urlRoot: 'http://192.168.1.107:3000/api/v1/vehicles/',
		
		defaults: {
			license_plate: '',
			identifier: '',
			brand: '',
			model: '',
			color: '',
			notes: '',
			year: '',
			user_id, ''
		}
	});
	
	return VehicleModel;
});