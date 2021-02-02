jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 KredaSet in the list
// * All 3 KredaSet have at least one Orders

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
		"nnnn/test/integration/MasterJourney",
		"nnnn/test/integration/NavigationJourney",
		"nnnn/test/integration/NotFoundJourney",
		"nnnn/test/integration/BusyJourney",
		"nnnn/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});