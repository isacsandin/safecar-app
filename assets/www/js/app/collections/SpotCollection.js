define([
	'backbone',
	'app/models/SpotModel'
], function(Backbone, SpotModel) {
	var SpotCollection = Backbone.Collection.extend({
		model: SpotModel,
	});
	
	return SpotCollection;
});