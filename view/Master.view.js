sap.ui.jsview("homeautomation.view.Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Master
	*/ 
	getControllerName : function() {
		return "homeautomation.controller.Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Master
	*/ 
	createContent : function(oController) {
		var categories = new sap.ui.model.json.JSONModel({ categories: [
		                                                    		    {caption: "Lighting", icon: "sap-icon://lightbulb", description: "Manage lights"},
		                                                    			{caption: "Heating", icon:"sap-icon://temperature", description: "Climate control"},
		                                                    			{caption: "Moods", icon:"sap-icon://explorer", description: "Pick a mood"},
		                                                    			{caption: "Leave/Enter", icon:"sap-icon://log", description: "Enter/Leave home"}
		                                                    			]});
		                                                    		this.setModel(categories);
		
 		var page = new sap.m.Page({
			title: "Area",
		});
 		
 		var contentList = new sap.m.List({
			id : "ltCategories", // sap.ui.core.ID
			//mode : "{device>/listMode}", // sap.m.ListMode
			noDataText : "No categories", // string
			showNoData : true, // boolean
			enableBusyIndicator : true, // boolean, since 1.20.2
			modeAnimationOn : true, // boolean
			growing : true, // boolean, since 1.16
			growingScrollToLoad : true, // boolean, since 1.16
			backgroundDesign : sap.m.BackgroundDesign.Solid, // sap.m.BackgroundDesign, since 1.14
			//itemPress: function(oEvent) { oController.onSelect(oEvent); }
		// since 1.20
		});
 		
 		try{
 		contentList.bindItems({
			path : "/categories", 
			template : new sap.m.StandardListItem({
				title: "{caption}",
				description: "{description}",
				icon: "{icon}",
				//type: "{device>/listItemType}",
				type : "Active",
				press: function(oEvent) { oController.onSelect(oEvent); }
//				detailPress : oController.onSelect
			})
		});
 		} catch(e) {
 			console.log(e);
 		}
 		
 		console.log(contentList);
 		console.log(sap.ui.getCore().getModel());
 		
 		page.addContent(contentList);
 		return page;
	}

});