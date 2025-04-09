sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("learning.learningproject.controller.View1", {
        onNavigateToSecondPage: function () {
            sap.m.MessageToast.show("Navigating to the Second page...");
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        onClick: function () {
            let oImage = this.getView().byId("hiddenImage");
            let isVisible = oImage.getVisible();
            oImage.setVisible(!isVisible); 
        }, 
        onChangeTitle: function () {
            let oInput = this.getView().byId("name"); 
            let sValue = oInput.getValue(); 
        
            let oText = this.getView().byId("text"); 
            sap.m.MessageToast.show("Title changed to: " + sValue);
            oText.setText(sValue); 
        }
        
    });
});