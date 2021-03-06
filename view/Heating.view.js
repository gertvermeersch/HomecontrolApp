/**
 * Created by GeVr on 22/01/2015.
 */

jQuery.sap.require("sap.m.MessageBox");

sap.ui.jsview("homeautomation.view.Heating", {
    getControllerName : function() {
        return "homeautomation.controller.Heating";
    },

    createContent : function(oController) {
        var _page = new sap.m.Page({
            title: "Heating",
            showNavButton: sap.ui.Device.system.phone,
            navButtonPress: [oController.toMaster, oController]
        });
        
        var _form = new sap.ui.layout.form.SimpleForm({
			maxContainerCols : 2, // int
			layout : sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout, // sap.ui.layout.form.SimpleFormLayout
			labelSpanL : 4, // int, since 1.16.3
			labelSpanM : 2, // int, since 1.16.3
			labelSpanS : 12, // int, since 1.16.3
			emptySpanL : 0, // int, since 1.16.3
			emptySpanM : 0, // int, since 1.16.3
			emptySpanS : 0, // int, since 1.16.3
			columnsL : 3, // int, since 1.16.3
			columnsM : 2, // int, since 1.16.3
			breakpointL : 1024, // int, since 1.16.3
			breakpointM : 600, // int, since 1.16.3
			
			title : new sap.ui.core.Title({
				text : "Climate control", // string
			})
		// sap.ui.core.Title, since 1.16.3
		});
        
        //start of current temperature
        
        
        
        _form.addContent(new sap.ui.core.Title({
			text : "Live data"
		}));
        
        _form.addContent(new sap.m.Label(
                {
                    id: "lblState",
                    text: "Heating state"
                }
            ));

            _form.addContent(new sap.m.Text( {
                id : "txtHeatingState",
                value: "Unknown - please wait",
                editable: false,
            }));

        _form.addContent(new sap.m.Label(
            {
                id: "lblTemperature",
                text: "Current temperature"
            }
        ));

        _form.addContent(new sap.m.Text( {
            id : "txtTemperature",
            value: "Unknown - please wait",
            editable: false,
        }));
        
        _form.addContent(new sap.m.Label(
                {
                    id: "lblTargetTemperature",
                    text: "Target temperature"
                }
            ));

            _form.addContent(new sap.m.Text( {
                id : "txtTargetTemperature",
                value: "Unknown - please wait",
                editable: false,
            }));
        _form.addContent(new sap.m.Label({
        	text: "Override button",

        }));
        
        _form.addContent(new sap.m.ToggleButton({
			text : "@ home", // string,
			id : "btnAtHome",
			press : [ function(oEvent) {
				oController.onButtonPress(oEvent, "at_home/");
			}, this ]
		}));
		
		_form.addContent(new sap.m.ToggleButton({
			text : "Shut off", // string,
			id : "btnShutOff",
			type: sap.m.ButtonType.Reject,
			press : [ function(oEvent) {
                oController.onButtonPress(oEvent, "shut_off/");
			}, this ]
		}));
        
        //end of current temperature
        
        //start of temperature settings
        
        _form.addContent(new sap.ui.core.Title({
			text : "Temperature settings"
		}));

        _form.addContent(new sap.m.Label(
            {
                text: "Home temperature"
            }
        ));
        _form.addContent(new sap.m.Input( {
            id : "itxHomeTemp",
            value: "XX°",
            editable: false
        }));
        
        _form.addContent(new sap.m.Label(
                {
                    text: "Away temperature"
                }
            ));
        _form.addContent(new sap.m.Input( {
            id : "itxAwayTemp",
            value: "XX°",
            editable: false
        }));
    
        //end of temperature settings
        
        //start of timing settings
        
        _form.addContent(new sap.ui.core.Title({
			text : "Week timing"
		}));

        _form.addContent(new sap.m.Label(
            {
                text: "Morning interval"
            }
        ));
        _form.addContent(new sap.m.DateTimeInput({
        	id : "dtiMorningStart",
			type : sap.m.DateTimeInputType.Time, // sap.m.DateTimeInputType
			displayFormat : undefined, // string
			valueFormat : undefined, // string
            editable: false
		}));
        _form.addContent(new sap.m.DateTimeInput({
        	id : "dtiMorningEnd",
			type : sap.m.DateTimeInputType.Time, // sap.m.DateTimeInputType
			displayFormat : undefined, // string
			valueFormat : undefined, // string
            editable: false
		}));
        
        _form.addContent(new sap.m.Label(
                {
                    text: "Evening interval"
                }
        ));
        _form.addContent(new sap.m.DateTimeInput({
        	id : "dtiEveningStart",
			type : sap.m.DateTimeInputType.Time, // sap.m.DateTimeInputType
			displayFormat : undefined, // string
			valueFormat : undefined, // string
            editable: false
		}));
        _form.addContent(new sap.m.DateTimeInput({
        	id : "dtiEveningEnd",
			type : sap.m.DateTimeInputType.Time, // sap.m.DateTimeInputType
			displayFormat : undefined, // string
			valueFormat : undefined, // string
            editable: false
		}));
        
        
        _form.addContent(new sap.ui.core.Title({
			text : "Weekend timing"
		}));

        _form.addContent(new sap.m.Label(
            {
                text: "Day interval"
            }
        ));
        _form.addContent(new sap.m.DateTimeInput({
        	id : "dtiWeekendStart",
			type : sap.m.DateTimeInputType.Time, // sap.m.DateTimeInputType
			displayFormat : undefined, // string
			valueFormat : undefined, // string
            editable: false
		}));
        _form.addContent(new sap.m.DateTimeInput({
        	id : "dtiWeekendEnd",
			type : sap.m.DateTimeInputType.Time, // sap.m.DateTimeInputType
			displayFormat : undefined, // string
			valueFormat : undefined, // string
            editable: false
		}));
        
        
        
        _page.setFooter(new sap.m.Bar(
				{
					contentRight : [
							new sap.m.Button(
                            {
                                id: 'btnSave',
                                text : 'Save', // string
                                type : sap.m.ButtonType.Accept,
                                visible: false,
                                press : [
                                    function(
                                        oEvent) {
                                        oController.onSaveButton(oEvent);
                                    },
                                    this ]
                            }),
                        new sap.m.Button(
                            {
                                id: 'btnEdit',
                                text : 'Edit', // string
                                press : [
                                    function(
                                        oEvent) {

                                        oController.onEditButton(oEvent);
                                    },
                                    this ]
                                
                            }),
                        new sap.m.Button(
                            {
                                id : 'btnCancel',
                                text : 'Cancel', // string,
                                visible: false,
                                type : sap.m.ButtonType.Reject,
                                press : [
                                    function(
                                        oEvent) {

                                        oController.onCancelButton(oEvent);
                                    },
                                    this ]
                            })
                    ]
		}));
        
       //end of timing settings
        
        _page.addContent(_form);
        

        return _page;
    },

    showSuccess: function() {
        sap.m.MessageBox.show(
            "Settings saved", {
                icon: sap.m.MessageBox.Icon.SUCCESS,
                title: "Climate control",
                actions: [sap.m.MessageBox.Action.OK]
            }
        );
    },

    showError: function(error) {
        sap.m.MessageBox.show(
            "An error occurred while saving the settings", {
                icon: sap.m.MessageBox.Icon.ERROR,
                title: "Climate control",
                actions: [sap.m.MessageBox.Action.OK]
            }
        );
        console.log(error.message);
    }
})