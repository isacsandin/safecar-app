define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/maps',
    'text!templates/alertTemplate.html'
], function($, _, Backbone, maps, alertTemplate) {
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