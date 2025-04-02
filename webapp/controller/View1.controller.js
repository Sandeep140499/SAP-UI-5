sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("learning.learningproject.controller.View1", {
        onNavigateToSecondPage: function () {
            sap.m.MessageToast.show("Navigating to the Second page...");
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        }

    });
});