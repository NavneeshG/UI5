sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.nav.Component", {

		metadata: {
			manifest: "json"
		},
		init:function(){
			// call the the init function of parent
			UIComponent.prototype.init.apply(this,arguments);
			
			// create view based on url/hash
			this.getRouter().initialize();
		}

	});

});
