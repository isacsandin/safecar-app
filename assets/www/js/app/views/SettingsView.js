define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/settingsTemplate.html'
], function($, _, Backbone, settingsTemplate) {
	var View = Backbone.View.extend({

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(settingsTemplate));
			return this;
		}
	});
	
	return View;
});