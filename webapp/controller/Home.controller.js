sap.ui.define(["sap/ui/demo/nav/controller/BaseController"], function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.Home", {
		onDisplayNotFound: function (oEvent) {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				"fromTarget": "home"
			});
		},
		onNavToEmployees: function (oEvent) {
				this.getRouter().navTo("employeeList");
			}
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf sap.ui.demo.nav.view.Home
			 */
			//	onInit: function() {
			//
			//	},
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf sap.ui.demo.nav.view.Home
			 */
			//	onBeforeRendering: function() {
			//
			//	},
			/**
			 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			 * This hook is the same one that SAPUI5 controls get after being rendered.
			 * @memberOf sap.ui.demo.nav.view.Home
			 */
			//	onAfterRendering: function() {
			//
			//	},
			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf sap.ui.demo.nav.view.Home
			 */
			//	onExit: function() {
			//
			//	}
			,
		/**
		 *@memberOf sap.ui.demo.nav.controller.Home
		 */
		onNavToEmployeeOverview: function (oEvent) {
			this.getRouter().navTo("employeeOverview");
		}
	});
});