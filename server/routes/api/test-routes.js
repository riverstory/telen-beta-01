const logger = require('../../configuration').logger.withContext('Test Routes');
const testService = require('../../services/test.service');
const handlers = require('../router-handlers');
const routes = require('express').Router();

function test (req, res) {
    try {
        logger.info('GET Test');
        testService.getTest([])
            .then((data) => {
                if (data.status === 200) {
                    return handlers.successResponseHandler(res, data);
                } else {
                    return handlers.errorResponseHandler(res, data);
                }
            });
    } catch (error) {
        // logger.error('Terms And Agreements Service: GET Terms and Agreements Text - Error:' + error);
        return handlers.errorResponseHandler(res, error);
    }
}

routes.get('/test', test);



module.exports = routes;