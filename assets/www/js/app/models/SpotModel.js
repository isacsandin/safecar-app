define([
	'backbone'
], function(Backbone) {
	var SpotModel = Backbone.Model.extend({
		urlRoot: 'http://192.168.1.113:3000/api/v1/spots/',
		
		defaults: {
			location: '',
			notes: '',
			user_id: '',
			occurrence_id: ''
		}
	});

	return SpotModel;
});