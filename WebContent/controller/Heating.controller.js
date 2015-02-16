/**
 * Created by GeVr on 22/01/2015.
 */
sap.ui.controller("homeautomation.controller.Heating", {
    onInit: function() {

    },

    onAfterRendering : function() {
        self = this;
        self.refreshControls(self);
        sap.ui.getCore().getEventBus().subscribe(
            "model", "update",
            function(){self.refreshControls(self)}, self);
        self.refreshConfig(self);
        setInterval(function(){self.refreshConfig(self)}, 60000); //only each minute
    },
    
    refreshConfig : function(self) {
    	var url = this.getView().getModel("server").oData.server_url + "heating";
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
                sap.ui.getCore().byId("itxHomeTemp").setValue(data.heating.temperature_present + "°");
                sap.ui.getCore().byId("itxAwayTemp").setValue(data.heating.temperature_away + "°");
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

    refreshControls : function(self) {
        try {
        	var value = self.getView().getModel().oData.temperature;
        	if(value != "")
        		sap.ui.getCore().byId("txtTemperature").setText(value);
        	var value = self.getView().getModel().oData.target_temperature;
        	if(value != "")
        		sap.ui.getCore().byId("txtTargetTemperature").setText(value);
        	var value = self.getView().getModel().oData.heating_state;
        	if(value != "")
        		sap.ui.getCore().byId("txtHeatingState").setText(value?"ON":"OFF");
        	var value = self.getView().getModel().oData.at_home;
        	if(value)
        		sap.ui.getCore().byId("btnAtHome").setPressed(true);
        	else
        		sap.ui.getCore().byId("btnAtHome").setPressed(false);
        	
        	var value = self.getView().getModel().oData.shut_off;
        	if(value)
        		sap.ui.getCore().byId("btnShutOff").setPressed(true);
        	else
        		sap.ui.getCore().byId("btnShutOff").setPressed(false);
        		
        } catch(e) {
            console.log(e);
        }
    }
})