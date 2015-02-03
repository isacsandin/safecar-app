define([
	'backbone',
	'app/models/OccurrenceModel'
], function(Backbone, OccurrenceModel) {
	var OccurrenceCollection = Backbone.Collection.extend({
		model: OccurrenceModel,
	})
	
	return OccurrenceCollection;
});