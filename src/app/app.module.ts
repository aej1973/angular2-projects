import { WeatherService } from './weather-api/weather.service';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { ListService } from './list-component/list.service';
import { ListComponent } from './list-component/list.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { AppRoutingModule } from './app.routing';
import { HomepageComponent } from './homepage-component/homepage.component';
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
    WeatherApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ListService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
