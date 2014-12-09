define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/navigationTemplate.html'
], function($, _, Backbone, navigationTemplate) {
    var View = Backbone.View.extend({
    	
    	events: {
    		'click #profile' : 'clickProfile'
    		
    	},
    	
        initialize: function() {
        	console.info("OK");
        },

        render: function() {
            var template = _.template(navigationTemplate);
            this.$el.html(template);

            return this;
        },
        
        clickProfile: function() {
			Backbone.history.navigate('vehicles', { trigger: true });
        }
    });

    return View;
});