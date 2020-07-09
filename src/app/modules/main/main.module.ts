import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MainRoutingModule } from "./main-routing.module";

// Component
import { MainComponent } from "./main.component";

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent
    ],
    providers: []
})
export class MainModule {}