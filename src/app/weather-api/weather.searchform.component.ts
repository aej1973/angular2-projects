import { IWeather } from './weather-interface';
import { WeatherService } from './weather.service';
import { Component } from '@angular/core';
import { Location } from './weather.location';


@Component({
    selector:'app-search-form',
    templateUrl: 'weather.searchform.component.html',
})
export class WeatherSearhformComponent {
    constructor(private myWeatherSvs : WeatherService){}
    onSubmit(form){
        this.myWeatherSvs.searchWeatherData(form.value.location)
            .subscribe(
                data=>{
                  const newWeatherInfo:IWeather =
                      {
                          cityName: data.name,
                          forecast: data.weather[0].description,
                          temprature: data.main.temp+"°F",
                      }
                  
                  this.myWeatherSvs.addWeatherItem(newWeatherInfo);
                }
            );
    }
}