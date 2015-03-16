define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/EventsHandler',
    'text!templates/jQmPageTemplate.html'
], function($, _, Backbone, EventsHandler, jQmPageTemplate) {

    var View = Backbone.View.extend({
    	events: {
    		'click a.nav-link' : 'navigatePage'
    	},
    	
        initialize: function() {
            $( document ).on( "pagechange", this.$el, this.onPageChange );
            globalNotifications = _.extend({}, Backbone.Events);
        },

        tagName: 'div',

        attributes: {
            'data-role': 'page',
            'id': 'mainPage'
        },

        setFooterView: function(view) {
            this.footerView = view;

            return this;
        },

        setContentView: function(view) {
            this.contentView = view;

            return this;
        },

        render: function() {
            this.$el.html(_.template(jQmPageTemplate));
            
            if (this.contentView) {
                this.$('[data-role="content"]').html(this.contentView.render().$el);
            }

            return this;
        },

        navigate: function(transition) {
            var page = this.render();

            transition = 'slide';

            // Add the page to the DOM
            $('body').append(page.$el);

            // Programatically changes to the page
            $.mobile.changePage( page.$el , { changeHash: true, transition: transition } );
        },
        
        navigatePage: function(e) {
        	var route = $(e.currentTarget).data('router');
			EventsHandler.GlobalNotifications.trigger('navigate', route);
        },

        onPageChange: function(event) {
            window.scrollTo(0, 0);
        }

    });

    return View;
});