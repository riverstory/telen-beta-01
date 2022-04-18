const logger = require('../../configuration').logger.withContext('Map Resource');
const axios = require('axios');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const BadRequestError = require(__base + 'server/exceptions/BadRequestError');
const NotFound = require(__base + 'server/exceptions/NotFound');
const ResourceRequestException = require(__base + 'server/exceptions/ResourceRequestException');
// --
const host = 'http://localhost';
const baseUrl = host + '/applications/telengard/api';

function getStartPosition (character) {
    try {
        logger.info(`Dungeon Map Service - Get Player Start Position`);
        const url = `${baseUrl}/dungeon-map/start-position`;
        logger.info(`URL ${url}`);


        console.log ('Map Resource -> getStartPosition -> character: ', character);

        const result = await(axios.post(url, character));

        return {
            'status': 200,
            'response': result.data
        };
    } catch (error) {
        logger.error(`There was an issue: ${error}`);
        if (!error.response) {
            return new BadRequestError('There was an issue when retrieving the Player Start Position');
        } else if (error.response.status === 400 || error.response.status === 401 || error.response.status === 403 || error.response.status === 409) {
            return new BadRequestError(error.response.statusText);
        } else if (error.response.status === 404) {
            return new NotFound(error.response.statusText);
        } else if (error.response.status === 504 || error.response.status === 502 || error.response.status === 500 || error.response.status === 503) {
            return new ResourceRequestException(error.response.statusText);
        }
    }
}


function getDungeonRoomMetaData (coordinates) {
    try {
        logger.info(`Dungeon Map Service - Get Dungeon Room Meta Data`);
        const url = `${baseUrl}/dungeon-room`;
        logger.info(`URL ${url}`);


        console.log ('Map Resource -> getDungeonRoomMetaData -> coordinates: ', coordinates);

        const result = await(axios.post(url, coordinates));

        return {
            'status': 200,
            'response': result.data
        };
    } catch (error) {
        logger.error(`There was an issue: ${error}`);
        if (!error.response) {
            return new BadRequestError('There was an issue when retrieving the Dungeon Room Information');
        } else if (error.response.status === 400 || error.response.status === 401 || error.response.status === 403 || error.response.status === 409) {
            return new BadRequestError(error.response.statusText);
        } else if (error.response.status === 404) {
            return new NotFound(error.response.statusText);
        } else if (error.response.status === 504 || error.response.status === 502 || error.response.status === 500 || error.response.status === 503) {
            return new ResourceRequestException(error.response.statusText);
        }
    }
}

module.exports = {
    getStartPosition: async(getStartPosition),
    getDungeonRoomMetaData: async(getDungeonRoomMetaData)
};