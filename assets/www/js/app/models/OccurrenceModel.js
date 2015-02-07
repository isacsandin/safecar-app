define([
	'backbone'
], function(Backbone) {
	var OccurrenceModel = Backbone.Model.extend({
		urlRoot: 'http://192.168.1.107:3000/api/v1/occurrences/',
		
		defaults: {
			location: '',
			notes: '',
			status: '',
			user_id: '',
			vehicle_id: ''
		}
	});

	return OccurrenceModel;
});