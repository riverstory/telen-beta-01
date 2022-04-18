import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'

// Resources
// TODO

// Services
import * as services from 'src/app/core/services';

@Component({
    selector: 'app-player-assets',
    templateUrl: './player-assets.component.html',
    styleUrls: ['./player-assets.component.css']
})

export class PlayerAssetsComponent implements OnInit {
    constructor(
        // private router: Router,
        private baseDataService: services.BaseDataService
    ) { }

    ngOnInit() {
        // this.testIt();
    }

    goToMain() {
        // this.router.navigate(['welcome']);
        // this.router.navigateByUrl('welcome');
    }

    testIt() {
        this.baseDataService.getTest()
        .subscribe(result => {
            console.log ('PlayerAssetsComponent -> getTest -> result', result);
            // setTimeout(() => {this.goToMain();}, 5000);
        }, err => {
            console.log ('there was an error', err);
        });
    }

}
