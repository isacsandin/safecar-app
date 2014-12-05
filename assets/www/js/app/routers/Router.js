define([
        'backbone',
        'app/views/JqmPageView',
        'app/views/NavigationView'
], function(Backbone, jqMPageView, FooterView) {
    var Router = Backbone.Router.extend({
    
		initialize: function() {
			this.currentPage = new jqMPageView();
			this.currentPage.setFooterView(new FooterView());
		    
			// Lógica do botão voltar
		    $(document).on('click', '[data-rel="back"]', function(event) {
		        window.history.back();
		        return false;
		    });
		},
		
		routes: {
			'' : 'index',
			'occurrences' : 'listOccurrences'
		},
	                
	    index: function() {
	    	this.navigate('occurrences', { trigger: true })
	    },
	    
	    listOccurrences: function() {
	    	var self = this;
	    	
	    	require(['app/views/OccurrenceListView'], function(OccurrenceListView) {
		    	self.currentPage.setContentView(new OccurrenceListView());
		    	self.currentPage.navigate();	
	    	});
	    }
    
    });

    return Router;
});