define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/EventsHandler',
    'text!templates/occurrenceCreateTemplate.html',
    'app/models/OccurrenceModel'
], function($, _, Backbone, EventsHandler, occurrenceCreateTemplate, OccurrenceModel) {
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
			var occurrence = new OccurrenceModel;
			
			occurrence.set({
				location: this.$el.find('#location').val(),
				notes: this.$el.find('#notes').val(),
				status: this.$el.find('#status').val()
			});			
			
			occurrence.save();
        }
	});
	
	return View;
});