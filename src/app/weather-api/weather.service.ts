import { IWeather } from './weather-interface';
import { Observable } from 'rxjs/Rx';

import { WEATHER_LIST } from './weather.data';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http'

@Injectable()
export class WeatherService {
     getWeatherList(){
         return WEATHER_LIST;
    }
    private weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    constructor(private http:Http){}

    addWeatherItem(newWeatherInfo : IWeather){
       WEATHER_LIST.push(newWeatherInfo);
    }

    searchWeatherData(cityInfo:string) : Observable<any>{
        return this.http.get(this.weatherUrl + cityInfo + '&APPID=4a86f39ef8a4c5619480bc731fac422c&units=imperial')
                   .map(response =><Location[]>response.json())
                   .catch(this.handleError);
    }

    private handleError (error: Response | any) {
            // In a real world app, we might use a remote logging infrastructure
            let errMsg: string;
            if (error instanceof Response) {
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            } else {
                errMsg = error.message ? error.message : error.toString();
            }
            console.error(errMsg);
            return Observable.throw(errMsg);
            }
    }