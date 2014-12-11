define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/EventsHandler',
    'text!templates/occurrenceCreateTemplate.html'
], function($, _, Backbone, EventsHandler, occurrenceCreateTemplate) {
	var View = Backbone.View.extend({

		events: {
    		'click #alert' : 'alert'
    	},

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(occurrenceCreateTemplate));
			return this;
		},

		alert: function() {
        	alert("Alertado");
        }
	});
	
	return View;
});