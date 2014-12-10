define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/profileTemplate.html'
], function($, _, Backbone, profileTemplate) {
	var View = Backbone.View.extend({

		initialize: function () {
			this.render();
		},
	
		render: function () {
			this.$el.html(_.template(profileTemplate));
			return this;
		}
	});
	
	return View;
});