import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'loading',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: './modules/main/main.module#MainModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
