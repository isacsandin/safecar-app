define([
	'backbone'
], function(Backbone) {
	var OccurrenceModel = Backbone.Model.extend({
		
	});

	var OccurrenceCollection = Backbone.Collection.extend({
		model: OccurrenceModel,
	})
});