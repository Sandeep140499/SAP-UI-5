sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("learning.learningproject.controller.App", {
      onInit() {
      },

      onNavigateToSecondPage() {
          const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("RouteView2");
      }
  });
});