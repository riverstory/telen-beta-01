import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'

// Resources
// TODO

// Services
import * as services from 'src/app/core/services';
import { PlayerMapService } from './player-map.service';

@Component({
    selector: 'app-player-map',
    templateUrl: './player-map.component.html',
    styleUrls: ['./player-map.component.css']
})

export class PlayerMapComponent implements OnInit {

    private startPosition: any;
    public character = {"new": true, "id": 1234}; // TODO: create and use Character model


    constructor(
        // private router: Router,
        private baseDataService: services.BaseDataService,
        private playerMapService: PlayerMapService
    ) { }

    ngOnInit() {
        // this.testIt();
        // -------------
        this.playerMapService.getPlayerStartPosition(this.character).subscribe(result => {
            this.startPosition = result.response.data;
        });

        console.log ('PlayerMapComponent', this);
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
