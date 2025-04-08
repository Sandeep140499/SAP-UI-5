sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
    
], function(Controller, JSONModel, MessageToast, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("learning.learningproject.controller.Second", {
        
        onInit: function() {
            var oModel = new JSONModel(
                sap.ui.require.toUrl("learning/learningproject/model/mountains.json")
            );
            this.getView().setModel(oModel);
        },

        onFilterSearch: function(oEvent) {
            var oTable = this.getView().byId("table");
            var oBinding = oTable.getBinding("items");
            var aFilters = [];
            var sName = this.getView().byId("filterName").getValue();

            if (sName) {
                aFilters.push(new Filter("name", FilterOperator.Contains, sName));
            }

            var sCountries = this.getView().byId("filterCountries").getValue();
            if (sCountries) {
                aFilters.push(new Filter("countries", FilterOperator.Contains, sCountries));
            }

            oBinding.filter(aFilters);
        },

        onNavigateToFirstPage: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            sap.m.MessageToast.show("Navigating to the First page...");
            oRouter.navTo("RouteView1");
        },

        onNavigateToThirdPage: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            sap.m.MessageToast.show("Navigating to the third page...");
            oRouter.navTo("RouteView3");
        }
        
    });
});
