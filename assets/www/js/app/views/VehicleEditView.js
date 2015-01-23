define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/vehicleEditTemplate.html'
], function($, _, Backbone, vehicleEditTemplate) {
	var View = Backbone.View.extend({

		events: {
    		'click #save' : 'save'
    	},

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(vehicleEditTemplate));
			return this;
		},

		save: function() {
        	alert("Salvo");
        }
	});
	
	return View;
});