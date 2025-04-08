sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("learning.learningproject.controller.List", {
		onInit: function () {
			this.bus = this.getOwnerComponent().getEventBus();
		},
		
		handleNavigateToMidColumnPress: function () {
			this.bus.publish("flexible", "setDetailPage");
		},

		onNavigateToSecondPage: function () {
            MessageToast.show("Navigating to the Second page...");
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },

		onNavigateToFourthPage: function () {
			MessageToast.show("Navigating to the Fourth page...");
			this.getOwnerComponent().getRouter().navTo("RouteView4");
		}
	});
});