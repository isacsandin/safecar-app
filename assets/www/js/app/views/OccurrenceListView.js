define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/occurrenceListTemplate.html'
], function($, _, Backbone, occurrenceListTemplate) {
	var View = Backbone.View.extend({

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(occurrenceListTemplate));
			return this;
		}
	});
	
	return View;
});