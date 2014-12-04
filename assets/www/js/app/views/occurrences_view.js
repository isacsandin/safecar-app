define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/occurrences_template.html'
], function($, _, Backbone, OccurrencesTemplate) {
	var OccurrencesView = Backbone.View.extend({

		el: "#body",

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(OccurrencesTemplate));
		}
	});
	
	return OccurrencesView;
});