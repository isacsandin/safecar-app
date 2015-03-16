define([
	'backbone'
], function(Backbone) {
	var UserModel = Backbone.Model.extend({
		urlRoot: 'http://192.168.1.113:3000/users/',
		
		defaults: {
			name: '',
			email: '',
			birthday: '',
			telephone: '',
			location: ''
		}
	});

	return UserModel;
});