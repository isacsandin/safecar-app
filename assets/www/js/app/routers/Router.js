define([
        'backbone',
        'app/helpers/EventsHandler',
        'app/views/JqmPageView',
        'app/views/NavigationView'
], function(Backbone, EventsHandler, JqMPageView, FooterView) {
    var Router = Backbone.Router.extend({
    
		initialize: function() {
			this.currentPage = new JqMPageView();
//			this.currentPage.setFooterView(new FooterView());
			
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
			'profile' : 'profile',
			'profile_edit' : 'profileEdit',
			'vehicle' : 'vehicle',
			'vehicles' : 'listVehicles',
			'vehicle_edit' : 'vehicleEdit',
			'alert' : 'alert',
			'occurrence' : 'occurrence',
			'occurrences' : 'listOccurrences',
			'settings' : 'settings'
		},
	                
	    index: function() {
	    	this.navigate('occurrences', { trigger: true });
	    },

		profile: function() {
	    	require(['app/views/ProfileView'], function(ProfileView) {
		    	var profilePage = new JqMPageView();
		    	profilePage.setContentView(new ProfileView());
		    	profilePage.setFooterView(new FooterView());
		    	profilePage.navigate();
	    	});
	    },

	    profileEdit: function() {
	    	require(['app/views/ProfileEditView'], function(ProfileEditView) {
		    	var profileEditPage = new JqMPageView();
		    	profileEditPage.setContentView(new ProfileEditView());
		    	profileEditPage.setFooterView(new FooterView());
		    	profileEditPage.navigate();
	    	});
	    },

	    vehicle: function() {
	    	require(['app/views/VehicleView'], function(VehicleView) {
		    	var vehiclePage = new JqMPageView();
		    	vehiclePage.setContentView(new VehicleView());
		    	vehiclePage.setFooterView(new FooterView());
		    	vehiclePage.navigate();
	    	});
	    },

	    listVehicles: function() {
	    	require(['app/views/VehicleListView'], function(VehicleListView) {
		    	var vehiclesPage = new JqMPageView();
		    	vehiclesPage.setContentView(new VehicleListView());
		    	vehiclesPage.setFooterView(new FooterView());
		    	vehiclesPage.navigate();
	    	});
	    },

	    vehicleEdit: function() {
	    	require(['app/views/VehicleEditView'], function(VehicleEditView) {
		    	var vehicleEditPage = new JqMPageView();
		    	vehicleEditPage.setContentView(new VehicleEditView());
		    	vehicleEditPage.setFooterView(new FooterView());
		    	vehicleEditPage.navigate();
	    	});
	    },

	    alert: function() {
	    	require(['app/views/OccurrenceCreateView'], function(OccurrenceCreateView) {
		    	var occurrenceCreatePage = new JqMPageView();
		    	occurrenceCreatePage.setContentView(new OccurrenceCreateView());
		    	occurrenceCreatePage.setFooterView(new FooterView());
		    	occurrenceCreatePage.navigate();
	    	});
	    },

	    occurrence: function() {    	
	    	require(['app/views/OccurrenceView'], function(OccurrenceView) {
		    	var occurrencePage = new JqMPageView();
		    	occurrencePage.setContentView(new OccurrenceView());
		    	occurrencePage.setFooterView(new FooterView());
		    	occurrencePage.navigate();
		   	});
	    },
	    
	    listOccurrences: function() {    	
	    	require(['app/views/OccurrenceListView'], function(OccurrenceListView) {
		    	var occurrencesPage = new JqMPageView();
		    	occurrencesPage.setContentView(new OccurrenceListView());
		    	occurrencesPage.setFooterView(new FooterView());
		    	occurrencesPage.navigate();
		   	});
	    },

		settings: function() {	    	
	    	require(['app/views/SettingsView'], function(SettingsView) {
		    	var settingsPage = new JqMPageView();
		    	settingsPage.setContentView(new SettingsView());
		    	settingsPage.setFooterView(new FooterView());
		    	settingsPage.navigate();
	    	});
	    }

    });

    return Router;
});