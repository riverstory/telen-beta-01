import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseDataService {
    constructor(
        private http: HttpClient
    ) { }

    public getTest () {
        console.log ('BaseDataService -> getTest');
        return this.http.get<any>(`http://localhost:9001/telengard-beta/api/test/test`)
            .pipe(
                catchError(error => {
                    console.log ('ERROR', error);
                    return throwError(error);
                }),
                map(data => {
                    console.log ('API TEST: data: ', data);
                    return data;
                })
            );

    }
}