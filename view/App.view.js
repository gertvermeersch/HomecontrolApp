sap.ui.jsview("homeautomation.view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf homeautomation.App
	*/ 
	getControllerName : function() {
		return "homeautomation.controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf homeautomation.App
	*/ 
	createContent : function(oController) {
		var app = new sap.m.SplitApp({
			id : "saMain", // sap.ui.core.ID
			defaultTransitionNameDetail : "slide", // string
			defaultTransitionNameMaster : "slide", // string
			mode : sap.m.SplitAppMode.ShowHideMode, // sap.m.SplitAppMode
			masterButtonText : undefined, // string
			backgroundColor : undefined, // string, since 1.11.2
			backgroundImage : undefined, // sap.ui.core.URI, since 1.11.2
			backgroundRepeat : false, // boolean, since 1.11.2
			backgroundOpacity : 1, // float, since 1.11.2
			homeIcon : "sap-icon://home", // any
			masterPages : [], // sap.ui.core.Control
			detailPages : [], // sap.ui.core.Control
			initialDetail : undefined, // sap.ui.core.Control
			initialMaster : undefined // sap.ui.core.Control
			
		});
		//if(sap.ui.Device.system.phone)
			app.setMode(sap.m.SplitAppMode.ShowHideMode);


		
		var shell = new sap.m.Shell({
			id : "shMain", // sap.ui.core.ID
			title : "Home Automation", // string
			logo : undefined, // sap.ui.core.URI
			showLogout : true, // boolean
			headerRightText : undefined, // string
			appWidthLimited : true, // boolean
			//backgroundColor : "#333333", // sap.ui.core.CSSColor, since 1.11.2
			backgroundImage : undefined, // sap.ui.core.URI, since 1.11.2
			backgroundRepeat : false, // boolean, since 1.11.2
			backgroundOpacity : 1, // float, since 1.11.2
			homeIcon : undefined, // object
			tooltip : undefined, // sap.ui.core.TooltipBase
			app : app, // sap.ui.core.Control
			logout : [ function(oEvent) {
				var control = oEvent.getSource();
				alert("logout");
			}, this ]
		});




		
		return shell;
		
	}

});