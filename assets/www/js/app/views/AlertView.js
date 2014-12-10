define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/alertTemplate.html'
], function($, _, Backbone, alertTemplate) {
	var View = Backbone.View.extend({

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(alertTemplate));
			return this;
		}
	});
	
	return View;
});