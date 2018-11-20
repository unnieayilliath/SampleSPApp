import { Forecast } from '../Models/Forecast';
import pnp from '@pnp/pnpjs';
declare let $: any;
export class ForecastService {
    constructor() {
    }
    static testPnPConfiguration(year: string) {
        pnp.sp.profiles.userProfile.then(function (result) {
           // log it here
        });
    }
}