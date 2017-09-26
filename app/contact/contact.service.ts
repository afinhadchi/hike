
import {Injectable} from "@angular/core";

@Injectable()
export class ContactService{

    postContactFrom(contactValue: any){
        console.log('service logS')
        console.log(contactValue)
    }

}