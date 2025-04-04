sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("learning.learningproject.controller.Second", {
        
        onInit: function() {
            // Create JSON model with mountain data
            // var oMountainData = {
            //     mountains: [
            //         { name: "Everest", height: 8848, range: "Himalayas", first_ascent: "1953", countries: "Nepal/China", parent_mountain: "None" },
            //         { name: "K2", height: 8611, range: "Karakoram", first_ascent: "1954", countries: "Pakistan/China", parent_mountain: "None" },
            //         { name: "Kangchenjunga", height: 8586, range: "Himalayas", first_ascent: "1955", countries: "Nepal/India", parent_mountain: "None" }
            //     ]
            // };

            // // Set the model to the view
            // var oModel = new JSONModel(oMountainData);
            // this.getView().setModel(oModel, "mountainModel");

            var oModel = new JSONModel(
                sap.ui.require.toUrl("learning/learningproject/model/mountains.json")
              );
              this.getView().setModel(oModel);

       

        },

        onNavigateToFirstPage: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("firstPage");
        },

        onNavigateToSecondPage: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("secondPage");
        }
        
    });
});
