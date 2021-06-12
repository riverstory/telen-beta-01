import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

// Resources
// TODO

// Services
import * as services from 'src/app/core/services';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit {
    constructor(
        private router: Router,
        private baseDataService: services.BaseDataService
    ) { }

    ngOnInit() {
        this.testIt();
    }

    goToCreatingMonsters() {
        this.router.navigate(['creating-monsters']);
    }

    testIt() {
        this.baseDataService.getTest()
        .subscribe(result => {
            console.log ('LoadingComponent -> getTest -> result', result);
            setTimeout(() => {this.goToCreatingMonsters();}, 5000);
        }, err => {
            console.log ('there was an error', err);
        });
    }

}
