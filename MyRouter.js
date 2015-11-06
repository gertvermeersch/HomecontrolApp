jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.declare("homeautomation.MyRouter");

sap.ui.core.routing.Router.extend("homeautomation.MyRouter", {
	constructor : function() {
		console.log("ROUTER started");
		sap.ui.core.routing.Router.apply(this, arguments);
		this._oRouteMatchHandler = new sap.m.routing.RouteMatchedHandler(this);
		//this._findSplitApp().addPage("sap.ui.demo.tdg.view.AddProduct", false);
	},

	createContent : function() {
		console.log("create content... Emptyness");

	},
	
	navToView: function(oOptions) {
		var oSplitApp = sap.ui.getCore().byId("saMain");
		var oView = this.getView(oOptions.targetViewName, oOptions.targetViewType);
		oSplitApp.addPage(oView, oOptions.isMaster);
		oSplitApp.to(oView.getId(), oOptions.transition || "fade", oOptions.data);
	},

	destroy : function() {
		console.log("ROUTER: destroy");
		sap.ui.core.routing.Router.prototype.destroy.apply(this, arguments);
		try {
			this._oRouteMatchedHandler.destroy();
		}
		catch(oException) {
			console.log("destroy of router failed");
		}
	}

});