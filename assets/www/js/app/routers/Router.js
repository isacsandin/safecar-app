define([
        'backbone',
        'app/helpers/EventsHandler',
        'app/views/JqmPageView',
        'app/views/NavigationView'
], function(Backbone, EventsHandler, JqMPageView, FooterView) {
    var Router = Backbone.Router.extend({
    
		initialize: function() {
			this.currentPage = new JqMPageView();
			this.currentPage.setFooterView(new FooterView());
			
			this.bindEvents();
		},
		
		bindEvents: function() {
			var self = this;
			
			// Lógica do botão voltar
		    $(document).on('click', '[data-rel="back"]', function(event) {
		        window.history.back();
		        return false;
		    });
		    
		    EventsHandler.GlobalNotifications.on('navigate', function(route) {
		    	this.navigate(route, { trigger: true });
		    }, this);
		},
		
		routes: {
			'' : 'index',
			'occurrences' : 'listOccurrences',
			'vehicles' : 'listVehicles'
		},
	                
	    index: function() {
	    	this.navigate('occurrences', { trigger: true });
	    },
	    
	    listOccurrences: function() {
	    	var self = this;
	    	
	    	require(['app/views/OccurrenceListView'], function(OccurrenceListView) {
		    	var occurrencesPage = new JqMPageView();
		    	occurrencesPage.setContentView(new OccurrenceListView());
		    	occurrencesPage.setFooterView(new FooterView());
		    	occurrencesPage.navigate();
	    	});
	    },
	    
	    listVehicles: function() {
	    	var self = this;
	    	
	    	require(['app/views/VehicleListView'], function(VehicleListView) {
		    	var vehiclesPage = new JqMPageView();
		    	vehiclesPage.setContentView(new VehicleListView());
		    	vehiclesPage.setFooterView(new FooterView());
		    	vehiclesPage.navigate();
	    	});
	    }
    });

    return Router;
});