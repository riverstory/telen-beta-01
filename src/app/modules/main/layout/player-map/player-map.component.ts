import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'

// Resources
import * as featuresResource from 'src/app/core/resources/features.resource';

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
    private currentPosition: any;
    private character = {"new": true, "id": 1234}; // TODO: create and use Character model
    // ---
    private mapCoordinates = [];
    public dungeonMapData = [];
    readonly FEATURE_TO_IMAGE_MAP = featuresResource.FEATURE_TO_IMAGE_MAP;


    constructor(
        // private router: Router,
        private baseDataService: services.BaseDataService,
        private playerMapService: PlayerMapService
    ) { }

    ngOnInit() {
        this.playerMapService.getPlayerStartPosition(this.character).subscribe(result => {
            this.startPosition = result.response.data;
            this.currentPosition = this.startPosition;
            this.getMapCoordinates().then(res => {
                this.mapCoordinates = res;
                for (let i = 0; i < this.mapCoordinates.length; i++) {
                    this.playerMapService.getDungeonRoomMetaData(this.mapCoordinates[i]).subscribe(result => {
                        this.dungeonMapData.push(result.response.data);
                        this.dungeonMapData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
                    });
                }
                // ---
                console.log ('PlayerMapComponent', this);
                // ---
            });
        });


    }

    private getMapCoordinates (): Promise<any> {
        let arr = [];
        for (let i=1; i <= 16; i++) {
            arr.push(
                this.playerMapService.getCoordinates(
                    this.currentPosition.x,
                    this.currentPosition.y,
                    this.currentPosition.z,
                    i)
            );
        }
        return Promise.resolve(arr);
    }

    public getMapGridHtml (index): string {
        // return `<span> ${index} </span>`;
        return this.room (this.dungeonMapData.filter(room => {return room.index === index;})[0]);
    }


    private room (data) {
        let room = data;
        let boundaryClass = (room.north + "-" + room.west).toLowerCase();
        let html = '<div class="map-grid-block ' + boundaryClass + '">';
        if (room.index === 6) {
            html += '<div class="hero-main"><div class="hero-sub"><img src="assets/img/dungeon/hero.png" class="hero-image"></div></div>';
            if (room.feature !== '' && room.featureFixed) {
                var featureClass = room.feature.replace(" ", "-").toLowerCase();
                html += '<div class="feature-main ';
                html += featureClass;
                html += '"><div class="feature-sub ';
                html += featureClass;
                html += '"><img src="';
                html += 'assets/img/dungeon/';
                html += this.FEATURE_TO_IMAGE_MAP[featureClass];
                html += '" class="feature-image ';
                html += featureClass;
                html += '"></div></div>';
            }
        }
        html += '</div>';
        if (room.index % 4 === 0 && room.index > 1) {
            html += "<br>";
        }

        if (room.index === 16) {
            html += this.applyCSS();
        }


        return html;
    }



    private applyCSS () {
        const CSS = `<style>
.hero-main {
    position: relative;
    width: 56px;
    height: 38px;
}
.hero-sub {
    position: absolute;
    top: 60%; left: 60%;
    transform: translate(-50%,-50%);
    color: #ccc;
    margin: 25% auto;
}
.hero-image {
    max-height: 1.6em;
    margin-left: 1.6em;
}


div#map-grid {
    display: inline-block;
}

/* THE DUNGEON MAP */
.map-grid-block {
    width: 56px;
    height: 56px;
    display: inline-block;

    /*border: 1px solid #ccc;*/

}

/* Classes follow NORTH-WEST (north then west) boundary naming pattern */
.empty-empty {
    background: none;

}
.empty-door {
    background: url('assets/img/dungeon/vdoor.png');
    background-position: left;
    background-repeat: no-repeat;
}
.empty-wall {
    background: url('assets/img/dungeon/vwall.png');
    background-position: left;
    background-repeat: no-repeat;
}
.door-empty {
    background: url('assets/img/dungeon/hdoor.png');
    background-position: top;
    background-repeat: no-repeat;
}
.wall-empty {
    background: url('assets/img/dungeon/hwall.png');
    background-position: top;
    background-repeat: no-repeat;
}
.wall-wall {
    background: url('assets/img/dungeon/hwall.png'), url('assets/img/dungeon/vwall.png');
    background-position: top, left;
    background-repeat: no-repeat, no-repeat;
}
.wall-door {
    background: url('assets/img/dungeon/hwall.png'), url('assets/img/dungeon/vdoor.png');
    background-position: top, left;
    background-repeat: no-repeat, no-repeat;
}
.door-wall {
    background: url('assets/img/dungeon/hdoor.png'), url('assets/img/dungeon/vwall.png');
    background-position: top, left;
    background-repeat: no-repeat, no-repeat;
}
.door-door {
    background: url('assets/img/dungeon/hdoor.png'), url('assets/img/dungeon/vdoor.png');
    background-position: top, left;
    background-repeat: no-repeat, no-repeat;
}
.wall-wall-fix-corner {
    background: url('assets/img/dungeon/hwall.png'), url('assets/img/dungeon/vwall.png'), url('assets/img/dungeon/hwall.png');
    background-position: top, left;
    background-repeat: no-repeat, no-repeat;
}
.wall-door-fix-corner {
    background: url('assets/img/dungeon/hwall.png'), url('assets/img/dungeon/vdoor.png'), url('assets/img/dungeon/hwall.png');
    background-position: top, left;
    background-repeat: no-repeat, no-repeat;
}
.door-wall-fix-corner {
    background: url('assets/img/dungeon/hdoor.png'), url('assets/img/dungeon/vwall.png'), url('assets/img/dungeon/hwall.png');
    background-position: top, left;
    background-repeat: no-repeat, no-repeat;
}
.door-door-fix-corner {
    background: url('assets/img/dungeon/hdoor.png'), url('assets/img/dungeon/vdoor.png'), url('assets/img/dungeon/hwall.png');
    background-position: top, left, -48px 0px;
    background-repeat: no-repeat, no-repeat, no-repeat;
}
.empty-empty-fix-corner {
    background: url('assets/img/dungeon/hwall.png');
    background-repeat: no-repeat;
    background-position-x: -48px;
}
.empty-door-fix-corner {
    background: url('assets/img/dungeon/vdoor.png'), url('assets/img/dungeon/hwall.png');
    background-position: left, -48px 0px;
    background-repeat: no-repeat, no-repeat;
}
.empty-wall-fix-corner {
    background: url('assets/img/dungeon/vwall.png'), url('assets/img/dungeon/hwall.png');
    background-position: left, -48px 0px;
    background-repeat: no-repeat, no-repeat;
}
.door-empty-fix-corner {
    background: url('assets/img/dungeon/hdoor.png'), url('assets/img/dungeon/hwall.png');
    background-position: top, -48px 0px;
    background-repeat: no-repeat, no-repeat;
}
.wall-empty-fix-corner {
    background: url('assets/img/dungeon/hwall.png'), url('assets/img/dungeon/hwall.png');
    background-position: top, -48px 0px;
    background-repeat: no-repeat, no-repeat;
}

.feature-main.stairway-up,
.feature-main.stairway-down,
.feature-main.stairway-both {
    position: absolute;
    top: 50px;
    left: 73px;
}

.feature-main.elevator,
.feature-main.pit,
.feature-main.teleporter,
.feature-main.altar,
.feature-main.fountain,
.feature-main.throne {
    position: absolute;
    left: 66px;
    top: 88px;
}
.feature-main.gray-misty-cube,
.feature-main.small-box-with-buttons {
    position: absolute;
    top: 80px;
    left: 70px;
}</style>`;
        return CSS;
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
