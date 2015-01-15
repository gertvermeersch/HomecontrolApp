sap.ui.controller("homeautomation.controller.Lighting", {
    server_url: "https://hydra.vermeers.ch:8443/",
    uplighter: false,
    twilight: false,
    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf view.Lighting
     */
	onInit: function() {
        self = this;
        //load states of the buttons
        this.refreshControls();

        setInterval(function(){self.refreshControls()}, 10000);
	},

    refreshControls: function() {
        self = this;
        jQuery.ajax({
            type: "GET",
            contentType: "application/json",
            //username: 'domoticaApp',
            //password: 'D0m0t1c4',
            url: self.server_url,
            dataType: "json",
            beforeSend: function (request)
            {
                request.setRequestHeader("Authorization", "Basic " + btoa('domoticaApp:D0m0t1c4'));
            },
            success: function (data) {
                console.log(data);
                if(data.living.uplighter == "on")
                    sap.ui.getCore().byId("btnUplighter").setPressed(true);
                else if(data.living.uplighter == "off")
                    sap.ui.getCore().byId("btnUplighter").setPressed(false);
                if(data.living.twilight == "on")
                    sap.ui.getCore().byId("btnTwilight2").setPressed(true);
                else if(data.living.twilight == "off")
                    sap.ui.getCore().byId("btnTwilight2").setPressed(false);
                if(data.living.desklight == "on")
                    sap.ui.getCore().byId("btnDesklight").setPressed(true);
                else if(data.living.desklight == "off")
                    sap.ui.getCore().byId("btnDesklight").setPressed(false);
                if(data.living.twilights == "on")
                    sap.ui.getCore().byId("btnTwilight1").setPressed(true);
                else if(data.living.twilights == "off")
                    sap.ui.getCore().byId("btnTwilight1").setPressed(false);
                if(data.bedroom.saltlamp == "on")
                    sap.ui.getCore().byId("btnSaltlamp").setPressed(true);
                else if(data.bedroom.saltlamp == "off")
                    sap.ui.getCore().byId("btnSaltlamp").setPressed(false);
                if(data.bedroom.scent == "on")
                    sap.ui.getCore().byId("btnScent").setPressed(true);
                else if(data.bedroom.scent == "off")
                    sap.ui.getCore().byId("btnScent").setPressed(false);

                console.log(data);
            },
            error: function (data) {
                //sap.m.MessageBox.alert("Error while sending request: " + data.toString());

            }

        });

    },

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
            beforeSend: function (request)
            {
                request.setRequestHeader("Authorization", "Basic " + btoa('domoticaApp:D0m0t1c4'));
            },
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


    },

    toMaster: function() {
        var page = sap.ui.getCore().byId("saMain").getCurrentMasterPage(true);
        sap.ui.getCore().byId("saMain").backToTopMaster();
    }

});