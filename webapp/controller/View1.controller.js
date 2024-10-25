sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("zgitconnect.controller.View1", {
        onInit: function () {
            alert('Hello');
            // Doing the change from BAS and want to push it to GIT

        }
    });
});
