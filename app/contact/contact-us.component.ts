
import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ContactService} from "./contact.service";

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent{

   /* submitForm(form :NgForm){
        console.log(form.value)
    }*/
   constructor(private _contactService: ContactService){
       }

    submitForm(form: NgForm){
        this._contactService.postContactFrom(form.value);
    }

}

