sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("learning.learningproject.controller.DetailDetail", {
		onInit: function () {
			this.bus = this.getOwnerComponent().getEventBus();
		},
		handleNavigateToMidColumnPress: function () {
			this.bus.publish("flexible", "setDetailPage");
		}
	});
});
