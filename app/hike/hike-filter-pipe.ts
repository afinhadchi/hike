
import {Pipe, PipeTransform} from "@angular/core";
import {Hike} from "./hike"

@Pipe({
    name: 'hikeFilter'
})
export class HikeFilterPipe implements PipeTransform {

    transform(value: Hike[], serchTerm:string = ''){
        if(serchTerm !== ''){
            let result = value.filter((hike : Hike) => hike.description.toLocaleLowerCase().includes(serchTerm))
            return result
        }else {
            return value;
        }
    }
}