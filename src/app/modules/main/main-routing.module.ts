import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main.component";
import { LoadingComponent } from "./loading/loading.component";
import { CreatingComponent } from "./creating/creating.component";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
    {
        path: 'welcome',
        component: MainComponent
    },
    {
        path: 'loading',
        component: LoadingComponent
    },
    {
        path: 'creating-monsters',
        component: CreatingComponent
    },
    {
        path: 'game-layout',
        component: LayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
