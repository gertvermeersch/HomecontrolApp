sap.ui.controller("homeautomation.controller.Lighting", {
    server_url: "http://192.168.1.69:8080/",
    uplighter: false,
    twilight: false,
    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf view.Lighting
     */
//	onInit: function() {
//
//	},

    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     * @memberOf view.Lighting
     */
//	onBeforeRendering: function() {
//
//	},

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * @memberOf view.Lighting
     */
//	onAfterRendering: function() {
//
//	},

    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     * @memberOf view.Lighting
     */
//	onExit: function() {
//
//	}

    sendAjax: function(path) {
        jQuery.sap.require("sap.m.MessageBox");
        self = this;
        path = self.server_url + path;
        jQuery.ajax({
            type: "POST",
            contentType: "application/json",
            url: path,
            dataType: "json",
            success: function (data) {

            },
            error: function (data) {
               sap.m.MessageBox.alert("Error while sending request: " + data.toString());

            }

        });
    },

    onButtonTap: function(oEvent, path) {
        self = this;
        console.log(oEvent.getSource().sId);
        console.log(path);
        //get state of the button
        var state = oEvent.getSource().getPressed();
        oFullpath = path.concat(state?"on":"off");
        self.sendAjax(oFullpath);


    }

});