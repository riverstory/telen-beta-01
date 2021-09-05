import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { LayoutComponent } from "./layout.component";
import { PlayerAssetsComponent } from "./player-assets/player-assets.component";
import { PlayerMapComponent } from "./player-map/player-map.component";
import { PlayerUIComponent } from "./player-ui/player-ui.component";


// Services
import * as services from 'src/app/core/services';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LayoutComponent,
        PlayerAssetsComponent,
        PlayerMapComponent,
        PlayerUIComponent
    ],
    providers: [
    	services.BaseDataService
    ]
})
export class LayoutModule {}