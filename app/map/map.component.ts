
import {Component} from "@angular/core";
import {ServiceMap} from "./service.map";

@Component({
   moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.component.html',
    styleUrls: ['map-style.css']
})
export class MapComponent{

    lat1: number = 48.819536506720716;
    lng1: number = 2.2129503085936904;
    markers: marker[]=[];

    coordLat: number;
    coorordLan: number;
    defaultLatLan: boolean;
    startingPoint: string ='99 grande rue 92310 Sévres France'
    constructor(private _mapService: ServiceMap ){
}
    onCoordMarquerDropped(event : any){
        this.defaultLatLan = true;
        this.coordLat = event.coords.lat.toFixed(5);
        this.coorordLan = event.coords.lng.toFixed(5);
        console.log(event);
    }

    geoCode(){
        this._mapService.getLonLang(this.startingPoint).subscribe(
            (data:any) => this.placeMarquerOnGeocodPlace(data),
            (err:any) => console.error(err)

        )
    }

    placeMarquerOnGeocodPlace(loaction : any){
        let marker = {
            lat:loaction.geometry.location.lat(),
            lgt:loaction.geometry.location.lng(),
            title:"",
            draggable:true
        }
        this.markers.push(marker);
    }

}

interface marker {
    lat: number;
    lgt:number;
    title?:string;
    icon?:string;
    draggable:boolean

}