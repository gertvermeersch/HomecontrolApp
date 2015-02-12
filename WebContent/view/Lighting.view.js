sap.ui.jsview("homeautomation.view.Lighting", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Lighting
	*/ 
	getControllerName : function() {
		return "homeautomation.controller.Lighting";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Lighting
	*/ 
	createContent : function(oController) {
 		var itRoomSelector = new sap.m.IconTabBar({
			id : "itRoomSelector", // sap.ui.core.ID
			showSelection : true, // boolean
			expandable : true, // boolean, since 1.15.0
			expanded : true, // boolean, since 1.15.0
		})
 		/* living room part */
 		var ifLivingroom = new sap.m.IconTabFilter({
			id : "ifLivingroom", // sap.ui.core.ID
			text : "Living room", // string
			enabled : true, // boolean
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			key : "living", // string
			count : "", // string
			showAll : false, // boolean
			icon : "sap-icon://sys-monitor", // sap.ui.core.URI
			iconColor : sap.ui.core.IconColor.Default, // sap.ui.core.IconColor
			iconDensityAware : true, // boolean
			visible : true, // boolean
			design : sap.m.IconTabFilterDesign.Vertical, // sap.m.IconTabFilterDesign
		// sap.ui.core.Control, since 1.15.0
		});
 		

 		
 		var frmLiving = new sap.ui.layout.form.SimpleForm({
			id : "frmLiving", // sap.ui.core.ID
			minWidth : -1, // int
			editable : true, // boolean
			labelMinWidth : 1, // int
			layout : sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout, // sap.ui.layout.form.SimpleFormLayout
			content: [
			          new sap.m.Label({
			        	  text : "Lights"
					}),
			          new sap.m.ToggleButton({
						id : "btnTwilight1", // sap.ui.core.ID
						text : "2x Twilight", // string
						type : sap.m.ButtonType.Default, // sap.m.ButtonType
						icon : "sap-icon://energy-saving-lightbulb", // sap.ui.core.URI
						iconFirst : true, // boolean
						tap : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						press : [ function(oEvent) {oController.onButtonTap(oEvent, "living/twilights/");}, oController]
					}),

					new sap.m.ToggleButton({
						id : "btnTwilight2", // sap.ui.core.ID
						text : "Standing lamp", // string
						type : sap.m.ButtonType.Default, // sap.m.ButtonType
						icon : "sap-icon://energy-saving-lightbulb", // sap.ui.core.URI
						iconFirst : true, // boolean
						tap : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						press :  [ function(oEvent) {oController.onButtonTap(oEvent, "living/twilight/");}, oController]
					}),

					new sap.m.ToggleButton({
						id : "btnDesklight", // sap.ui.core.ID
						text : "Desk light", // string
						type : sap.m.ButtonType.Default, // sap.m.ButtonType
						icon : "sap-icon://lightbulb", // sap.ui.core.URI
						iconFirst : true, // boolean
						tap : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						press :  [ function(oEvent) {oController.onButtonTap(oEvent, "living/desklight/");}, oController]
					}),

					new sap.m.ToggleButton({
						id : "btnUplighter", // sap.ui.core.ID
						text : "Uplighter", // string
						type : sap.m.ButtonType.Default, // sap.m.ButtonType
						icon : "sap-icon://lightbulb", // sap.ui.core.URI
						iconFirst : true, // boolean
						tap : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						press : [ function(oEvent) {oController.onButtonTap(oEvent, "living/uplighter/");}, oController]
					}),
					 new sap.m.Label({
						 text : "LED Red"
						}),
					new sap.m.Slider({
						id : "sdrRed", // sap.ui.core.ID
						width : "100%", // sap.ui.core.CSSSize
						enabled : true, // boolean
						visible : true, // boolean
						name : "sdrRed", // string
						min : 0, // float
						max : 255, // float
						step : 1, // float
						change : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						liveChange : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ]
					}),
					 new sap.m.Label({
						 text : "LED Green"
						}),
					new sap.m.Slider({
						id : "sdrGreen", // sap.ui.core.ID
						width : "100%", // sap.ui.core.CSSSize
						enabled : true, // boolean
						visible : true, // boolean
						name : "sdrGreen", // string
						min : 0, // float
						max : 255, // float
						step : 1, // float
						change : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						liveChange : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ]
					}),
					 new sap.m.Label({
						 text : "LED Blue"
						}),
					new sap.m.Slider({
						id : "sdrBlue", // sap.ui.core.ID
						width : "100%", // sap.ui.core.CSSSize
						enabled : true, // boolean
						visible : true, // boolean
						name : "sdrBlue", // string
						min : 0, // float
						max : 255, // float
						step : 1, // float
						change : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						liveChange : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ]
					}),
			          
			]
		// sap.ui.core.Title, since 1.16.3
		});
 		
 		/* end of living room */
 		
 		
 		/* bedroom part */
 		var ifBedroom = new sap.m.IconTabFilter({
			id : "ifBedroom", // sap.ui.core.ID
			text : "Bedroom", // string
			enabled : true, // boolean
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			key : "bed", // string
			count : "", // string
			showAll : false, // boolean
			icon : "sap-icon://bed", // sap.ui.core.URI
			iconColor : sap.ui.core.IconColor.Default, // sap.ui.core.IconColor
			iconDensityAware : true, // boolean
			visible : true, // boolean
			design : sap.m.IconTabFilterDesign.Vertical, // sap.m.IconTabFilterDesign
		// sap.ui.core.Control, since 1.15.0
		});
 		

 		
 		
 		var frmBedroom = new sap.ui.layout.form.SimpleForm({
			id : "frmBedroom", // sap.ui.core.ID
			minWidth : -1, // int
			editable : true, // boolean
			labelMinWidth : 1, // int
			layout : sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout, // sap.ui.layout.form.SimpleFormLayout
			content: [
			          new sap.m.Label({
			        	  text : "Lights"
					}),
				new sap.m.ToggleButton({
					id : "btnSaltlamp", // sap.ui.core.ID
					text : "LED Tree", // string
					type : sap.m.ButtonType.Default, // sap.m.ButtonType
					icon : "sap-icon://lightbulb", // sap.ui.core.URI
					iconFirst : true, // boolean
					tap : [ function(oEvent) {
						var control = oEvent.getSource();
					}, this ],
					press : [ function(oEvent) {oController.onButtonTap(oEvent, "bedroom/saltlamp/");}, oController]
				}),
					 new sap.m.Label({
						}),
					new sap.m.ToggleButton({
						id : "btnScent", // sap.ui.core.ID
						text : "Mistify", // string
						type : sap.m.ButtonType.Default, // sap.m.ButtonType
						icon : "sap-icon://arrow-top", // sap.ui.core.URI
						iconFirst : true, // boolean
						tap : [ function(oEvent) {
							var control = oEvent.getSource();
						}, this ],
						press : [ function(oEvent) {oController.onButtonTap(oEvent, "bedroom/scent/");}, oController]
					})			          
			]
		// sap.ui.core.Title, since 1.16.3
		});
 		
 		/*end of bedroom part*/
 		
 		//ifBedroom.addContent(grdBedroom.addContent(frmBedroom));
 		//ifLivingroom.addContent(grdLiving.addContent(frmLiving));

		ifBedroom.addContent(frmBedroom);
		ifLivingroom.addContent(frmLiving);
 		
 
	
		
		var page = new sap.m.Page({
			title: "Lighting control",
			showNavButton: sap.ui.Device.system.phone,
			navButtonPress: [oController.toMaster, oController]
		});
		
		page.addContent(itRoomSelector);
		
		itRoomSelector.addItem(ifLivingroom);
		itRoomSelector.addItem(ifBedroom);
 		
 		return page;
	}

});