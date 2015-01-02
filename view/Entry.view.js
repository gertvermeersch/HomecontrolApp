sap.ui.jsview("homeautomation.view.Entry", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Entry
	*/ 
	getControllerName : function() {
		return "homeautomation.controller.Entry";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Entry
	*/ 
	createContent : function(oController) {
 		var page =  new sap.m.Page({
			title: "Entry/Leave the house"
		});
 		
 		var tlContainer = new sap.m.TileContainer({
			id : "tlContainer", // sap.ui.core.ID
			width : "100%", // sap.ui.core.CSSSize
			height : "500px", // sap.ui.core.CSSSize
			editable : false, // boolean
			allowAdd : false, // boolean
		});
 		
 		tlContainer.addTile(new sap.m.StandardTile({
				id : "tilEntry", // sap.ui.core.ID
				removable : true, // boolean
				title : "Entry", // string
				info : "Welcome home!", // string
				icon : undefined, // sap.ui.core.URI
				activeIcon : undefined, // sap.ui.core.URI
				number : undefined, // string
				numberUnit : undefined, // string
				infoState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
				type : sap.m.StandardTileType.None, // sap.m.StandardTileType
				iconDensityAware : true, // boolean
				press : [ function(oEvent) {
					var control = oEvent.getSource();
				}, this ]
 		 }));
 		
 		tlContainer.addTile(new sap.m.StandardTile({
			id : "tilLeave", // sap.ui.core.ID
			removable : true, // boolean
			title : "Leaving", // string
			info : "Goodbye!", // string
			icon : "sap-icon://log", // sap.ui.core.URI
			activeIcon : undefined, // sap.ui.core.URI
			number : undefined, // string
			numberUnit : undefined, // string
			infoState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			type : sap.m.StandardTileType.None, // sap.m.StandardTileType
			iconDensityAware : true, // boolean
			press : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		 }));
 		 
 		page.addContent(tlContainer);
 		
 		return page;
 		 
				


	}

});