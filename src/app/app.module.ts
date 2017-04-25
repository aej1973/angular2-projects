import { AddDisplayService } from './add-display/add-display.service';
import { WeatherSearhformComponent } from './weather-api/weather.searchform.component';
import { WeatherService } from './weather-api/weather.service';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { ListService } from './list-component/list.service';
import { ListComponent } from './list-component/list.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { AppRoutingModule } from './app.routing';
import { HomepageComponent } from './homepage-component/homepage.component';
import { AddAndDisplayComponent } from './add-display/add-display.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ListComponent,
    WeatherApiComponent,
    WeatherSearhformComponent,
    AddAndDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ListService,
    WeatherService,
    AddDisplayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
