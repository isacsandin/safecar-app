define([
	'backbone',
	'app/models/UserModel'
], function(Backbone, UserModel) {
	var UserCollection = Backbone.Collection.extend({
		model: UserModel,
	});
	
	return UserCollection;
});