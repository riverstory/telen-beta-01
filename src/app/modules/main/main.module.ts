import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MainRoutingModule } from "./main-routing.module";

// Component
import { MainComponent } from "./main.component";

// Services
import * as services from 'src/app/core/services';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
    	services.BaseDataService
    ]
})
export class MainModule {}