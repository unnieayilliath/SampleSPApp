define(["require", "exports", "./Services/ForecastService"], function (require, exports, ForecastService_1) {
    "use strict";
    class AppClass {
        static testPnPConfiguration() {
            ForecastService_1.ForecastService.testPnPConfiguration("200137");
            // $('#message').html(`<h2>${2017}</h2>`);
        }
    }
    exports.AppClass = AppClass;
    AppClass.testPnPConfiguration();
});
//# sourceMappingURL=app.js.map