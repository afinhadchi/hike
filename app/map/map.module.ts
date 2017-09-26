

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
//import { AgmCoreModule } from 'angular2-google-maps/core';
import { AgmCoreModule } from "angular2-google-maps/core";
import {MapComponent} from "./map.component"
import {ServiceMap} from "./service.map";

@NgModule({
    imports: [

        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCEP6jg8F_ilfsjsAl0_9QI3qGqqSDnYS4'
        })
    ],
    providers: [ServiceMap],
    declarations: [ MapComponent ],

})
export class MapModule{}