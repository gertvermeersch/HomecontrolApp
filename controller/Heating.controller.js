/**
 * Created by GeVr on 22/01/2015.
 */
sap.ui.controller("homeautomation.controller.Heating", {
    _edit: false,
    onInit: function() {

    },

    onAfterRendering : function() {
        var self = this;
        self.refreshControls();
        sap.ui.getCore().getEventBus().subscribe(
            "model", "update",
            function(){self.refreshControls()});
        self.refreshConfig(self);
        setInterval(function() {if(!self._edit)self.refreshConfig()}, 60000);
    },
    
    refreshConfig : function() {
        var self = this;
    	var url = this.getView().getModel("server").oData.server_url + "climate/config";
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
                    var model = new sap.ui.model.json.JSONModel(data)
                    self.getView().setModel("heating", model);
                    console.log("config received: ");
                    console.log(data);
                    //update configuration controls
                    sap.ui.getCore().byId("itxHomeTemp").setValue(data.heating.temperature_present);
                    sap.ui.getCore().byId("itxAwayTemp").setValue(data.heating.temperature_away);
                    sap.ui.getCore().byId("dtiMorningStart").setValue(data.heating.week_start_morning);
                    sap.ui.getCore().byId("dtiMorningEnd").setValue(data.heating.week_end_morning);
                    sap.ui.getCore().byId("dtiEveningStart").setValue(data.heating.week_start_evening);
                    sap.ui.getCore().byId("dtiEveningEnd").setValue(data.heating.week_end_evening);
                    sap.ui.getCore().byId("dtiWeekendStart").setValue(data.heating.weekend_start_time);
                    sap.ui.getCore().byId("dtiWeekendEnd").setValue(data.heating.weekend_stop_time);

                },
                error: function (error) {
                    //do nothing
                }
})
},

    refreshControls : function() {
        var self = this;

            try {
                var value = self.getView().getModel("climate").oData.temperature;
                if (value != "")
                    sap.ui.getCore().byId("txtTemperature").setText(value);
                var value = self.getView().getModel("climate").oData.target_temperature;
                if (value != "")
                    sap.ui.getCore().byId("txtTargetTemperature").setText(value);
                var value = self.getView().getModel("climate").oData.heating_state;
                    sap.ui.getCore().byId("txtHeatingState").setText(value ? "ON" : "OFF");
                var value = self.getView().getModel("climate").oData.at_home;
                if (value)
                    sap.ui.getCore().byId("btnAtHome").setPressed(true);
                else
                    sap.ui.getCore().byId("btnAtHome").setPressed(false);

                var value = self.getView().getModel("climate").oData.shut_off;
                if (value)
                    sap.ui.getCore().byId("btnShutOff").setPressed(true);
                else
                    sap.ui.getCore().byId("btnShutOff").setPressed(false);

            } catch (e) {
                console.log(e);
            }

    },

    onSaveButton : function(oEvent) {
        //get data
        var self = this;
        var payload = {
                heating: {
                    temperature_present: sap.ui.getCore().byId("itxHomeTemp").getValue(),
                    temperature_away: sap.ui.getCore().byId("itxAwayTemp").getValue(),
                    week_start_morning: sap.ui.getCore().byId("dtiMorningStart").getValue(),
                    week_end_morning: sap.ui.getCore().byId("dtiMorningEnd").getValue(),
                    week_start_evening: sap.ui.getCore().byId("dtiEveningStart").getValue(),
                    week_end_evening: sap.ui.getCore().byId("dtiEveningEnd").getValue(),
                    weekend_start_time: sap.ui.getCore().byId("dtiWeekendStart").getValue(),
                    weekend_stop_time: sap.ui.getCore().byId("dtiWeekendEnd").getValue()
            }
        };
        //post payload
        console.log(payload);
        var url = this.getView().getModel("server").oData.server_url + "heating";
        jQuery.ajax({
            type: "POST",
            contentType: "application/json",
            url: url,
            dataType: "json",
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", "Basic ZG9tb3RpY2FBcHA6RDBtMHQxYzQ=");
            },
            data: JSON.stringify(payload),
            success: function (data) {
                self.getView().showSuccess();
            },
            error: function (error) {
                self.getView().showError();
            }
        });

        this.viewMode();



    },

    onEditButton: function(oEvent) {
        this.editMode();
    },

    onCancelButton: function(oEvent) {
        this.viewMode();
    },

    editMode: function() {
        sap.ui.getCore().byId("itxHomeTemp").setEditable(true);
        sap.ui.getCore().byId("itxAwayTemp").setEditable(true);
        sap.ui.getCore().byId("dtiMorningStart").setEditable(true);
        sap.ui.getCore().byId("dtiMorningEnd").setEditable(true);
        sap.ui.getCore().byId("dtiEveningStart").setEditable(true);
        sap.ui.getCore().byId("dtiEveningEnd").setEditable(true);
        sap.ui.getCore().byId("dtiWeekendStart").setEditable(true);
        sap.ui.getCore().byId("dtiWeekendEnd").setEditable(true);
        sap.ui.getCore().byId("btnSave").setVisible(true);
        sap.ui.getCore().byId("btnCancel").setVisible(true);
        sap.ui.getCore().byId("btnEdit").setVisible(false);
        this._edit = true;
    },



    viewMode: function() {
        sap.ui.getCore().byId("itxHomeTemp").setEditable(false);
        sap.ui.getCore().byId("itxAwayTemp").setEditable(false);
        sap.ui.getCore().byId("dtiMorningStart").setEditable(false);
        sap.ui.getCore().byId("dtiMorningEnd").setEditable(false);
        sap.ui.getCore().byId("dtiEveningStart").setEditable(false);
        sap.ui.getCore().byId("dtiEveningEnd").setEditable(false);
        sap.ui.getCore().byId("dtiWeekendStart").setEditable(false);
        sap.ui.getCore().byId("dtiWeekendEnd").setEditable(false);
        sap.ui.getCore().byId("btnSave").setVisible(false);
        sap.ui.getCore().byId("btnCancel").setVisible(false);
        sap.ui.getCore().byId("btnEdit").setVisible(true);
        this._edit = false;

    },

    toMaster: function() {
        var page = sap.ui.getCore().byId("saMain").getCurrentMasterPage(true);
        sap.ui.getCore().byId("saMain").backToTopMaster();
    },

    onButtonPress: function(oEvent, path) {
        self = this;
        console.log(oEvent.getSource().sId);
        console.log(path);
        //get state of the button
        var state = oEvent.getSource().getPressed();
        oFullpath = path.concat(state?"on":"off");
        self.sendAjax(oFullpath);
    },

    sendAjax: function(path) {
        jQuery.sap.require("sap.m.MessageBox");
        self = this;
        path = this.getView().getModel("server").oData.server_url + path;
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
            error: function (data, status, error) {
                sap.m.MessageBox.alert("Error while sending request: " + error );
                console.log(status);
                console.log(error);

            }

        });
    },

})