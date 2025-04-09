sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("learning.learningproject.controller.List", {
		
		onInit: function() {
			// Load JSON data from the correct path and set it to the view
			var oModel = new JSONModel(
				sap.ui.require.toUrl("learning/learningproject/localService/mockdata/ProductCategories.json")
			);
			this.getView().setModel(oModel);
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