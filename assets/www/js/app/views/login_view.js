define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login_template.html'
], function($, _, Backbone, LoginTemplate) {
	var LoginView = Backbone.View.extend({

		el: "#body",

		events: {
    		"click #login-app": "login"
  		},

		
		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(LoginTemplate));
		},

		login: function () {
			alert("alan");
		}
	});
	
	return LoginView;
});