define([
        'backbone'
], function(Backbone, LoginView) {
        var Router = Backbone.Router.extend({
                initialize: function() {
                	// implementar aqui a lógica de verificação se o usuário
                	// está logado ou não
                	if(true) {
                		this.index();
                	} else {
                		this.login();
                	}
                   
                   
                },
                
                login: function() {
                        require([ "app/views/login_view"], function (LoginView) {
                                this.currentView = new LoginView({});
                        });
                },
                
                signup: function() {
                	
                },
                
                signout: function() {
                	
                },
                
                index: function() {
                        require([ "app/views/occurrences_view"], function (OccurrencesView) {
                	       this.bodyView = new OccurrencesView({});
                        });
                }
        });

        return Router;
});