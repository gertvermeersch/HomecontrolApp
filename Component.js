jQuery.sap.declare("homeautomation.Component");
jQuery.sap.require("homeautomation.MyRouter");


sap.ui.core.UIComponent.extend("homeautomation.Component", {
	metadata : {
		name : "Home Automation",
		version : "0.1",
		dependencies : {
			libs : ["sap.m", "sap.ui.layout"]
		},
		rootView: { 
			viewName:"homeautomation.view.App",
			type : "JS"				
		},
		routing : {
			config : {
				routerClass : homeautomation.MyRouter,
				viewType : "JS",//sap.ui.core.mvc.ViewType.JS,
				viewPath : "homeautomation.view",
				targetAggregation : "detailPages",
				targetControl : "saMain",
				clearTarget : false
			},
			routes : [{
				pattern : "",
				name : "main",
				view : "Master",
				targetAggregation : "masterPages",
			}]
		}
	},

	init: function() {	
		jQuery.sap.require("homeautomation.MyRouter");
		sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
		var deviceModel = new sap.ui.model.json.JSONModel({
			isTouch: sap.ui.Device.support.touch,
			isNoTouch:!sap.ui.Device.support.touch,
			isPhone:sap.ui.Device.system.phone,
			isNoPhone:!sap.ui.Device.system.phone,
			listMode:sap.ui.Device.system.phone ? "None":"SingleSelectMaster",
			listItemType:sap.ui.Device.system.phone?"Active":"Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		this.setModel(deviceModel,"device");
		this.getRouter().initialize();
		
	},



});





