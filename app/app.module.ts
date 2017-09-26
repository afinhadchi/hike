import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http"
import {RouterModule} from "@angular/router"

import { AppComponent } from './app.component';
import {HikeModule} from "./hike/hike.module";
import {HomeModule} from "./home/home.module";
import {HomeComponent} from "./home/home.component"
import {ContactModule} from "./contact/contact.module"
import {HikeListComponenet} from "./hike/hike-list.component"
import {PageNotFound} from "./page.not.found"
import {HikeDetailsComponent} from "./hike/hike.details.component"
import {ContactUsComponent} from "./contact/contact-us.component"
import {MapModule} from "./map/map.module";
import {MapComponent} from "./map/map.component"
@NgModule({
    imports: [BrowserModule,
                HikeModule,
                HttpModule,
                MapModule,
                HomeModule,
                ContactModule,
                RouterModule.forRoot([
                    {path: 'home' , component: HomeComponent},
                    {path: 'hikes' , component: HikeListComponenet},
                    {path: 'hikes/:id' , component: HikeDetailsComponent},
                    {path : 'contact' , component: ContactUsComponent},
                    {path : 'map' , component: MapComponent},
                    {path : '' , redirectTo: 'home', pathMatch: 'full'},
                    {path: '**', component: PageNotFound}
                ])
    ],
    declarations: [AppComponent, PageNotFound],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {
}