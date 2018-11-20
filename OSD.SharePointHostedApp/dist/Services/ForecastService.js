define(["require", "exports", "@pnp/pnpjs"], function (require, exports, pnpjs_1) {
    "use strict";
    class ForecastService {
        constructor() {
        }
        static testPnPConfiguration(year) {
            pnpjs_1.default.sp.profiles.userProfile.then(function (result) {
                // log it here
            });
        }
    }
    exports.ForecastService = ForecastService;
});
//# sourceMappingURL=ForecastService.js.map