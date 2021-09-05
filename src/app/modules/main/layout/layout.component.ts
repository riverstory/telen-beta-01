import { Component, OnInit } from '@angular/core';

// Resources
// TODO

// Services
import * as services from 'src/app/core/services';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {
    constructor(
        private baseDataService: services.BaseDataService
    ) {

        console.log ('LayoutComponent');

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
