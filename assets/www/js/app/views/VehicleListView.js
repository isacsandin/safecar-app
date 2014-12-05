define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/vehicleListTemplate.html'
], function($, _, Backbone, vehicleListTemplate) {
	var View = Backbone.View.extend({

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(vehicleListTemplate));
			return this;
		}
	});
	
	return View;
});