import {NgModule} from "@angular/core"
import {CommonModule} from '@angular/common'
import {FormsModule} from "@angular/forms"

import {HikeListComponenet} from "./hike-list.component";
import {HikeService} from "./hike.service";
import {HikeDetailsComponent} from "./hike.details.component";
import {HikeFilterPipe} from "./hike-filter-pipe"
import {RouterLink, RouterModule} from "@angular/router";
import {HikeSummaryCompenent} from "./hike.summary.compenent";

@NgModule({
    imports:[CommonModule, RouterModule, FormsModule],
    declarations: [HikeListComponenet, HikeDetailsComponent, HikeFilterPipe, HikeSummaryCompenent],
    exports: [HikeListComponenet],
    providers:[HikeService]
})

export class HikeModule {}