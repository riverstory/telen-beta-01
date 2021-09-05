import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'

// Resources
// TODO

// Services
import * as services from 'src/app/core/services';

@Component({
    selector: 'app-player-map',
    templateUrl: './player-map.component.html',
    styleUrls: ['./player-map.component.css']
})

export class PlayerMapComponent implements OnInit {
    constructor(
        // private router: Router,
        private baseDataService: services.BaseDataService
    ) { }

    ngOnInit() {
        this.testIt();
    }

    goToMain() {
        // this.router.navigate(['welcome']);
        // this.router.navigateByUrl('welcome');
    }

    testIt() {
        this.baseDataService.getTest()
        .subscribe(result => {
            console.log ('PlayerMapComponent -> getTest -> result', result);
            // setTimeout(() => {this.goToMain();}, 5000);
        }, err => {
            console.log ('there was an error', err);
        });
    }

}
