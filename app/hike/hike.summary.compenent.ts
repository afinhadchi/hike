
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Hike} from "./hike";

@Component({
   moduleId: module.id,
    selector: 'hike-summary',
    templateUrl: 'hike-summury-component.html',
    styleUrls: ['hike-summury.css']
})
export class HikeSummaryCompenent{
    @Input() hk: Hike;
    @Output() addHikeAsFavorite = new EventEmitter<Hike>();
    toggletoHike(isSelected:any){
        console.log(isSelected)
        if(isSelected){
            this.addHikeAsFavorite.emit(this.hk);
        }
    }

}