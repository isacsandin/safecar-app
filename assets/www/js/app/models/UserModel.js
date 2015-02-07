define([
	'backbone'
], function(Backbone) {
	var UserModel = Backbone.Model.extend({
		urlRoot: 'http://192.168.1.107:3000/api/v1/users/',
		
		defaults: {
			email: '',
			name: '',
			birthday: '',
			telephone: '',
			radius: ''
		}
	});

	return UserModel;
});