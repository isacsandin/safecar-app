define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/userEditTemplate.html',
    'app/models/UserModel'
], function($, _, Backbone, userEditTemplate, UserModel) {
	var View = Backbone.View.extend({

		events: {
    		'click #save' : 'save'
    	},

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(userEditTemplate));
			return this;
		},

		save: function() {
			var user = new UserModel;
			
			user.set({
				name: this.$el.find('#name').val(),
				email: this.$el.find('#email').val(),
				birthday: this.$el.find('#birthday').val(),
				telephone: this.$el.find('#telephone').val(),
				location: this.$el.find('#location').val()
			});			

			user.save();
        }
	});
	
	return View;
});