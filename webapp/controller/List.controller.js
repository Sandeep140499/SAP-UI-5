sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("learning.learningproject.controller.List", {
		
		onInit: function() {
			 // Initialize the event bus
			this.bus = this.getOwnerComponent().getEventBus();

			// Load JSON data from the correct path and set it to the view
			var oModel = new JSONModel(
				sap.ui.require.toUrl("learning/learningproject/localService/mockdata/ProductCategories.json")
			);
			this.getView().setModel(oModel);
		},

		handleNavigateToMidColumnPress: function () {
			// Publish the event to navigate to the middle column
			this.bus.publish("flexible", "setDetailPage", {
				message: "Navigate to middle column triggered"
			});
			MessageToast.show("Navigating to the middle column...");
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