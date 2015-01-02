sap.ui.controller("homeautomation.controller.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Master
*/
	onInit: function() {
		
	},

	onSelect: function(oEvent) {
		var title = oEvent.getSource().getProperty("title");
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		if(title == "Lighting") {
			router.navToView({
				targetViewName : "homeautomation.view.Lighting",
				targetViewType : "JS",
				isMaster : false
			});
			
		} else if (title == "Leave/Enter") {
			router.navToView({
				targetViewName : "homeautomation.view.Entry",
				targetViewType : "JS",
				isMaster : false
			});
			
		}
			
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Master
*/
//	onExit: function() {
//
//	}

});