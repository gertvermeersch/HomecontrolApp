sap.ui.controller("homeautomation.controller.Lighting", {

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

    onButtonTap: function(oEvent) {
        var oController = this;
        console.log("uplighter value=", this.uplighter);
        if(oEvent.getSource().sId == "btnUplighter" ) {
            console.log("starting ajax!");
            console.log(this.uplighter);
            //try to contact the webservice
            if (this.uplighter == false) {
                console.log("powering uplighter");
                jQuery.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "http://192.168.1.69:8080/living/uplighter/on",
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        oController.uplighter = true;
                    },
                    error: function (data) {
                        console.log(data);

                    }

                });
            } else if(this.uplighter == true) {
                console.log("killing uplighter");
                jQuery.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "http://192.168.1.69:8080/living/uplighter/off",
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        oController.uplighter = false;
                    },
                    error: function (data) {
                        console.log(data);

                    }

                });
            }

        } else if(oEvent.getSource().sId == "btnTwilight2" ) {
            console.log("starting ajax!");
            console.log(this.twilight);
            //try to contact the webservice
            if (this.twilight == false) {
                console.log("powering twilight");
                jQuery.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "http://192.168.1.69:8080/living/twilight/on",
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        oController.twilight = true;
                    },
                    error: function (data) {
                        console.log(data);

                    }

                });
            } else if(this.twilight == true) {
                console.log("killing twilight");
                jQuery.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "http://192.168.1.69:8080/living/twilight/off",
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        oController.twilight = false;
                    },
                    error: function (data) {
                        console.log(data);

                    }

                });
            }
        }

    }

});