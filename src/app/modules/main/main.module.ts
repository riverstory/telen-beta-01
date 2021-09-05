import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MainRoutingModule } from "./main-routing.module";
import { LayoutModule } from "./layout/layout.module";

// Component
import { MainComponent } from "./main.component";
import { LoadingComponent } from "./loading/loading.component";
import { CreatingComponent } from "./creating/creating.component";

// Services
import * as services from 'src/app/core/services';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        LayoutModule
    ],
    declarations: [
        MainComponent,
        LoadingComponent,
        CreatingComponent
    ],
    providers: [
    	services.BaseDataService
    ]
})
export class MainModule {}