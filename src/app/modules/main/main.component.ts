import { Component, OnInit } from '@angular/core';

// Resources
// TODO

// Services
import * as services from 'src/app/core/services';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
    constructor(
        private baseDataService: services.BaseDataService
    ) {

        console.log ('MainComponent');

     }

    ngOnInit() {
        this.testIt();
    }


    testIt() {
        this.baseDataService.getTest()
        .subscribe(result => {
            console.log ('MainComponent -> getTest -> result', result);
        }, err => {
            console.log ('there was an error', err);
        });
    }

}
