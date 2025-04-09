sap.ui.define(
    ["sap/f/library", "sap/m/SplitContainer", "sap/ui/core/mvc/Controller", "sap/ui/core/mvc/XMLView"],
    function (fioriLibrary, SplitContainer, Controller, XMLView) {
        "use strict";

        var LayoutType = fioriLibrary.LayoutType;

        return Controller.extend("learning.learningproject.controller.FlexibleColumnLayout", {
            onInit: function () {
                this.bus = this.getOwnerComponent().getEventBus();
                this.bus.subscribe("flexible", "setListPage", this.setListPage, this);
                this.bus.subscribe("flexible", "setDetailPage", this.setDetailPage, this);
                this.bus.subscribe("flexible", "setDetailDetailPage", this.setDetailDetailPage, this);

                this.oFlexibleColumnLayout = this.byId("fcl");
            },

            onExit: function () {
                this.bus.unsubscribe("flexible", "setListPage", this.setListPage, this);
                this.bus.unsubscribe("flexible", "setDetailPage", this.setDetailPage, this);
                this.bus.unsubscribe("flexible", "setDetailDetailPage", this.setDetailDetailPage, this);
            },

            setListPage: function () {
                this.oFlexibleColumnLayout.setLayout(LayoutType.OneColumn);
            },

            setDetailPage: function () {
                this._loadView({
                    id: "midView",
                    viewName: "learning.learningproject.view.Detail",
                }).then(
                    function (detailView) {
                        if (!this.oFlexibleColumnLayout.getMidColumnPages().includes(detailView)) {
                            this.oFlexibleColumnLayout.addMidColumnPage(detailView);
                        }
                        this.oFlexibleColumnLayout.setLayout(LayoutType.TwoColumnsMidExpanded);
                    }.bind(this)
                );
            },

            setDetailDetailPage: function () {
                this._loadView({
                    id: "endView",
                    viewName: "learning.learningproject.view.DetailDetail",
                }).then(
                    function (detailDetailView) {
                        if (!this.oFlexibleColumnLayout.getEndColumnPages().includes(detailDetailView)) {
                            this.oFlexibleColumnLayout.addEndColumnPage(detailDetailView);
                        }
                        this.oFlexibleColumnLayout.setLayout(LayoutType.ThreeColumnsEndExpanded);
                    }.bind(this)
                );
            },

            _loadView: function (options) {
                var mViews = (this._mViews = this._mViews || Object.create(null));
                if (!mViews[options.id]) {
                    mViews[options.id] = this.getOwnerComponent()
                    .runAsOwner(function () {
                        return XMLView.create(options);
                    })
                    .then(function (view) {
                        return view;
                    });
                }
                return mViews[options.id];
            },
        });
    }
);
