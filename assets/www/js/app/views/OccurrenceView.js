define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/maps',
    'text!templates/occurrenceTemplate.html'
], function($, _, Backbone, maps, occurrenceTemplate) {
	var View = Backbone.View.extend({

		events: {
			'click #spot' : 'spot',
			'click #show_hide_spots' : 'showHideSpots'
		},

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(occurrenceTemplate));
			return this;
		},

		spot: function () {
			alert("Você spotou ele :D");
		},

		showHideSpots: function () {
			alert("Escondendo spots");
		}
	});
	
	return View;
});