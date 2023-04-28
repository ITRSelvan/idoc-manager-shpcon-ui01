/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/idoc-manager-shpcon-ui01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
