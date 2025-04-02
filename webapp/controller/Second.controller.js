sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("learning.learningproject.controller.Second", {
        onNavigateToFirstPage: function () {
            sap.m.MessageToast.show("Navigating to the First page...");
            this.getOwnerComponent().getRouter().navTo("RouteView1");
        }
    });
});