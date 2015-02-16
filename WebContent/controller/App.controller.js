sap.ui.controller("homeautomation.controller.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf homeautomation.App
*/

	onInit: function() {




	},

    onAfterRendering: function() {
        //refresh the model each 5 sec and on load
        var self = this;
        var url = this.getView().getModel("server").oData.server_url + "states";
        console.log(url);
        this.refreshModel(url, self);
        setInterval(function(){self.refreshModel(url, self)}, 5000);
	},

    refreshModel : function(url, self) {

        jQuery.ajax({
            type: "GET",
            contentType: "application/json",
            url: url,
            dataType: "json",
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", "Basic ZG9tb3RpY2FBcHA6RDBtMHQxYzQ=");
            },
            success: function (data) {
                //console.log(data);
                self.getView().setModel(new sap.ui.model.json.JSONModel(data));
                sap.ui.getCore().getEventBus().publish("model", "update");
            },
            error: function (error) {
                //do nothing
            }
        })
    }

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf homeautomation.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf homeautomation.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf homeautomation.App
*/
//	onExit: function() {
//
//	}

});