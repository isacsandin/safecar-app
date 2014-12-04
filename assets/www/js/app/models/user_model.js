define([
	'backbone'
], function(Backbone) {
	var UserModel = Backbone.Model.extend({
		
	});

	var UserCollection = Backbone.Collection.extend({
		model: UserModel,
	});
});