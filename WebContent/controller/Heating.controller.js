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
    },

    refreshControls : function(self) {
        try {
            sap.ui.getCore().byId("txtTemperature").setText(self.getView().getModel().oData.living.temperature);
        } catch(e) {
            console.log(e);
        }
    }
})