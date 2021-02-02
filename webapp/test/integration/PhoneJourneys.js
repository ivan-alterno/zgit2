jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"nnnn/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"nnnn/test/integration/pages/App",
	"nnnn/test/integration/pages/Browser",
	"nnnn/test/integration/pages/Master",
	"nnnn/test/integration/pages/Detail",
	"nnnn/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "nnnn.view."
	});

	sap.ui.require([
		"nnnn/test/integration/NavigationJourneyPhone",
		"nnnn/test/integration/NotFoundJourneyPhone",
		"nnnn/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});