import {Component} from '@angular/core';
import {Hike} from './hike';
import {HikeService} from "./hike.service";


@Component({
    moduleId: module.id,
    selector: 'hike-list',
    templateUrl: 'hike-list-component.html',
})
export class HikeListComponenet {
    hikes: Hike[];
    serchTerm:string;
    constructor(private _hikeService : HikeService){

    }

    ngOnInit(){
        this._hikeService.getHikesFromAPI()
            .subscribe(tt => this.hikes = tt,
                err => console.error(err.status))
        console.log(this.hikes);
    }
    addToMyTodoHikes(hike:Hike){
        console.log(`rondo ${hike.name}`)
    }

}