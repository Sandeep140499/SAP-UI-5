

sap.ui.define([
    "sap/ui/core/UIComponent",
    "learning/learningproject/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("learning.learningproject.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // 🔹 Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // 🔹 Set the device model for responsiveness
            this.setModel(models.createDeviceModel(), "device");

            // 🔹 Enable routing
            this.getRouter().initialize();
        }
    });
});
