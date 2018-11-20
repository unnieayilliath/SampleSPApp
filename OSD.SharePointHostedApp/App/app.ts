import { ForecastService } from './Services/ForecastService';
import { Forecast } from './Models/Forecast';   
declare let $: any;
export class AppClass {
    static testPnPConfiguration() {
        ForecastService.testPnPConfiguration("200137");
       // $('#message').html(`<h2>${2017}</h2>`);
    }
}
AppClass.testPnPConfiguration();
