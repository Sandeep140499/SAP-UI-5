sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
  ],
  function(Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("learning.learningproject.controller.List", {
      onInit: function() {
        this.bus = this.getOwnerComponent().getEventBus();
        var oModel = new JSONModel(
          sap.ui.require.toUrl(
            "learning/learningproject/localService/mockdata/ProductCategories.json"
          )
        );
        this.getView().setModel(oModel);
      },

      handleNavigateToSidePanel: function(oEvent) {
        var oListItem =
          oEvent.getParameter("listItem") || oEvent.getParameter("item");
        var oContext = oListItem.getBindingContext();
        var sPath = oContext.getPath();

        this.bus.publish("flexible", "setDetailPage", {
          message: "Category selected",
          contextPath: sPath
        });

        MessageToast.show("Opening side panel for the selected category...");
      },

      // Optional extra handler
      handleNavigateToMidColumnPress: function(oEvent) {
        var oContext = oEvent.getSource().getBindingContext();
        var sPath = oContext.getPath();

        this.bus.publish("flexible", "setDetailPage", {
          message: "Navigate to middle column triggered",
          contextPath: sPath
        });

        MessageToast.show(
          "Navigating to the middle column for the selected item..."
        );
      },

      // Navigation to second page
      onNavigateToSecondPage: function() {
        MessageToast.show("Navigating to the Second page...");
        this.getOwnerComponent().getRouter().navTo("RouteView2");
      },

      // Navigation to fourth page
      onNavigateToFourthPage: function() {
        MessageToast.show("Navigating to the Fourth page...");
        this.getOwnerComponent().getRouter().navTo("RouteView4");
      }
    });
  }
);
