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
            var oImage = this.getView().byId("hiddenImage");
            var isVisible = oImage.getVisible();
            oImage.setVisible(!isVisible); 
        }, 
        onChangeTitle: function () {
            var oInput = this.getView().byId("name"); 
            var sValue = oInput.getValue(); 
        
            var oText = this.getView().byId("text"); 
            sap.m.MessageToast.show("Title changed to: " + sValue);
            oText.setText(sValue); 
        }
        
        

    });
});