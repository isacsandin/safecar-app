define([
	'backbone'
], function(Backbone) {
	var Model = Backbone.Model.extend({});

	var Collection = Backbone.Collection.extend({
		models: Model,
		url: 'http://192.168.1.105:8000/file.json'
	});

	return {
		model: Model,
		collection: Collection
	};
});