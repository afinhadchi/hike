
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
declare var google :any;
@Injectable()
export class ServiceMap {


    getLonLang(address: string) {
        let geocoder = new google.maps.Geocoder();
        return Observable.create((observer: any) => {
            geocoder.geocode({'address': address}, function (resulats: any, status : any) {
                if(status === google.maps.GeocoderStatus.OK){
                    console.log(resulats[0]);
                    observer.next(resulats[0]);
                    observer.complete();
                }else{
                    console.error('error status', status);
                    observer.next({});
                    observer.complete();
                }
            })

        })

    }
}