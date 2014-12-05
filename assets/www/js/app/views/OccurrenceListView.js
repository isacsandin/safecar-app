define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/occurrencesTemplate.html'
], function($, _, Backbone, occurrencesTemplate) {
	var View = Backbone.View.extend({

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(occurrencesTemplate));
			return this;
		}
	});
	
	return View;
});