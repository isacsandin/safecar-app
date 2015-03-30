define([
	'backbone'
], function(Backbone) {
	var VehicleModel = Backbone.Model.extend({
		urlRoot: 'http://safecar.herokuapp.com/api/v1/vehicles/',
		
		defaults: {
			license_plate: '',
			identifier: '',
			brand: '',
			model: '',
			color: '',
			notes: '',
			year: '',
			user_id: ''
		}
	});
	
	return VehicleModel;
});