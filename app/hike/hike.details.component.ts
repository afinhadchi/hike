import {Component, OnInit} from "@angular/core"
import {ActivatedRoute, Router, } from "@angular/router";


@Component({
    moduleId: module.id,
    templateUrl: './hike.details.components.html'

})
export class HikeDetailsComponent implements OnInit{

    title:string;
    hikename: string;
    hikeregion:string;
    constructor(private _route: ActivatedRoute, private _router: Router){

    }

    ngOnInit(){
        let id = this._route.snapshot.params['id'];
        this.title = `Détail de la rondonnée ${id}`;
    }
    goBack(){
        console.log("J'ai été clické");
        this._router.navigate(['/hikes']);

    }
}