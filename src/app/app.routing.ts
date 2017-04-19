import { WeatherApiComponent } from './weather-api/weather-api.component';
import { ListComponent } from './list-component/list.component';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage-component/homepage.component';
import { Routes, RouterModule} from '@angular/router';

const routes : Routes = [
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'home', component:HomepageComponent},
    {path:'list', component:ListComponent},
    {path:'weather', component:WeatherApiComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
