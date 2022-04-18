import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerMapService {
    constructor(
        private http: HttpClient
    ) { }



    public getPlayerStartPosition (character) {
        console.log ('PlayerMapService -> getPlayerStartPosition');
        return this.http.post<any>('/telengard-beta/api/map/start-position', character)
            .pipe(
                catchError(error => {
                    console.log ('ERROR', error);
                    return throwError(error);
                }),
                map(data => {
                    console.log ('PlayerMapService -> getPlayerStartPosition: data: ', data);
                    return data;
                })
            );

    }


    public getDungeonRoomMetaData (coordinates) {
        console.log ('PlayerMapService -> getDungeonRoomMetaData');
        return this.http.post<any>('/telengard-beta/api/map/room', coordinates)
            .pipe(
                catchError(error => {
                    console.log ('ERROR', error);
                    return throwError(error);
                }),
                map(data => {
                    // console.log ('API DUNGEON ROOM: data: ', data);
                    return data;
                })
            );
    }
}