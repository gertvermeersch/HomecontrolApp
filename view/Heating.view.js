/**
 * Created by GeVr on 22/01/2015.
 */
sap.ui.jsview("homeautomation.view.Heating", {
    getControllerName : function() {
        return "homeautomation.controller.Heating";
    },

    createContent : function(oController) {
        var page = new sap.m.Page({
            title: "Heating"
        });

        page.addContent(new sap.m.Label(
            {
                id: "lblTemperature",
                text: "Temperature"
            }
        ));

        page.addContent(new sap.m.Input( {
            id : "txtTemperature",
            value: "Unknown - please wait"
        }));

        return page;
    }
})