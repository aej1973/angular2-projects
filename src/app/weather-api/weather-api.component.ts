import { WeatherService } from './weather.service';
import { WEATHER_LIST } from './weather.data';
import { Component, OnInit } from '@angular/core';
import { IWeather } from './weather-interface';
@Component({
    selector: 'app-weatherApi',
    templateUrl:'weatherapi.component.html',
    styleUrls:[
        'weatherapi.style.css',
    ]
})
export class WeatherApiComponent implements OnInit {
        weatherlist : IWeather[];       
        ngOnInit(): any {
            this.weatherlist = WEATHER_LIST;
        }
   
}