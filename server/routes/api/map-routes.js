const logger = require('../../configuration').logger.withContext('Map Routes');
const mapService = require('../../services/map.service');
const handlers = require('../router-handlers');
const routes = require('express').Router();

function getStartPosition (req, res) {
    try {
        logger.info('POST : get start position');
        mapService.getStartPosition(req.body)
            .then((data) => {
                if (data.status === 200) {
                    return handlers.successResponseHandler(res, data);
                } else {
                    return handlers.errorResponseHandler(res, data);
                }
            });
    } catch (error) {
        logger.error('Dungeon Map Service: Get Player Start Position - Error:' + error);
        return handlers.errorResponseHandler(res, error);
    }
}

function getDungeonRoomMetaData (req, res) {
    try {
        logger.info('POST : get dungeon room info');
        mapService.getDungeonRoomMetaData(req.body)
            .then((data) => {
                if (data.status === 200) {
                    return handlers.successResponseHandler(res, data);
                } else {
                    return handlers.errorResponseHandler(res, data);
                }
            });
    } catch (error) {
        logger.error('Dungeon Map Service: Get Dungeon Room Info - Error:' + error);
        return handlers.errorResponseHandler(res, error);
    }
}



routes.post('/start-position', getStartPosition);
routes.post('/room', getDungeonRoomMetaData);




module.exports = routes;