define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/EventsHandler',
    'text!templates/occurrenceListTemplate.html'
], function($, _, Backbone, EventsHandler, occurrenceListTemplate) {
	var View = Backbone.View.extend({

		events: {
			'click #mute' : 'mute',
			'click #mute_all' : 'muteAll',
			'click #show_more' : 'showMore',
			'click #occurrence' : 'navigate'
		},

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(occurrenceListTemplate));
			return this;
		},

		navigate: function(e) {
        	var route = $(e.currentTarget).data('router');
			EventsHandler.GlobalNotifications.trigger('navigate', route);
        },

        mute: function () {
			alert("Mudo");
		},

		muteAll: function () {
			alert("Todos mudos");
		},

		showMore: function () {
			alert("Mostrando mais");
		}
	});
	
	return View;
});