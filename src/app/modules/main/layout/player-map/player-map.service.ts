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
        // console.log ('PlayerMapService -> getDungeonRoomMetaData');
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

    public getCoordinates (x, y, z, i) {
        switch (i) {
            case 1:
                return { "x": x-1, "y": y-1, "z": z, "i": i };
            break;
            case 2:
                return { "x": x, "y": y-1, "z": z, "i": i };
            break;
            case 3:
                return { "x": x+1, "y": y-1, "z": z, "i": i };
            break;
            case 4:
                return { "x": x+2, "y": y-1, "z": z, "i": i };
            break;
            case 5:
                return { "x": x-1, "y": y, "z": z, "i": i };
            break;
            case 6:
                return { "x": x, "y": y, "z": z, "i": i };
            break;
            case 7:
                return { "x": x+1, "y": y, "z": z, "i": i };
            break;
            case 8:
                return { "x": x+2, "y": y, "z": z, "i": i };
            break;
            case 9:
                return { "x": x-1, "y": y+1, "z": z, "i": i };
            break;
            case 10:
                return { "x": x, "y": y+1, "z": z, "i": i };
            break;
            case 11:
                return { "x": x+1, "y": y+1, "z": z, "i": i };
            break;
            case 12:
                return { "x": x+2, "y": y+1, "z": z, "i": i };
            break;
            case 13:
                return { "x": x-1, "y": y+2, "z": z, "i": i };
            break;
            case 14:
                return { "x": x, "y": y+2, "z": z, "i": i };
            break;
            case 15:
                return { "x": x+1, "y": y+2, "z": z, "i": i };
            break;
            case 16:
                return { "x": x+2, "y": y+2, "z": z, "i": i };
            break;
        }
    }
}