'use-strict';
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const mapResource = require('../infrastructure/resources/map-resource');

function getStartPosition (character) {

console.log ('mapService -> getStartPosition -> character:' , character);


    try {
        let data = await(mapResource.getStartPosition(character));
        return data;
    } catch (error) {
        return error;
    }
}


function getDungeonRoomMetaData (coordinates) {
console.log ('mapService -> getDungeonRoomMetaData -> coordinates:' , coordinates);
    try {
        let data = await(mapResource.getDungeonRoomMetaData(coordinates));
        return data;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getStartPosition: async(getStartPosition),
    getDungeonRoomMetaData: async(getDungeonRoomMetaData)
};