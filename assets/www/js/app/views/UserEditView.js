define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/userEditTemplate.html',
    'app/models/UserModel'
], function($, _, Backbone, userEditTemplate) {
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
				email: this.$el.find('#license_plate').val(),
				name: this.$el.find('#license_plate').val(),
				birthday: this.$el.find('#license_plate').val(),
				telephone: this.$el.find('#license_plate').val(),
				radius: this.$el.find('#license_plate').val()
			});			
			
			vehicle.save();
        }
	});
	
	return View;
});