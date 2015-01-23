define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/profileEditTemplate.html'
], function($, _, Backbone, profileEditTemplate) {
	var View = Backbone.View.extend({

		events: {
    		'click #save' : 'save'
    	},

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(profileEditTemplate));
			return this;
		},

		save: function() {
        	alert("Salvo");
        }
	});
	
	return View;
});