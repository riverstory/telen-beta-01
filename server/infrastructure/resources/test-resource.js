const logger = require('../../configuration').logger.withContext('Test Resource');
const axios = require('axios');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const BadRequestError = require(__base + 'server/exceptions/BadRequestError');
const NotFound = require(__base + 'server/exceptions/NotFound');
const ResourceRequestException = require(__base + 'server/exceptions/ResourceRequestException');
// const cloudConfig = require('../../configuration').cloudConfig;

// const baseUrl = 'terms-and-agreements-service/v1/terms';

function getTest (item) {
    try {
        // logger.info(`Terms and agreements Service - GET Terms and Agreements Text`);
        // const url = `${cloudConfig.getConnections().apiBaseUrl}${baseUrl}/${termsCode}`;
        // logger.info(`URL ${url}`);

        // const result = await(axios.get(url));
        result = {
            data: {
                    "foo": "bar",
                    "item": item
                }
        };
        return {
            'status': 200,
            'response': result.data
        };
    } catch (error) {
        logger.error(`There was an issue: ${error}`);
        if (!error.response) {
            return new BadRequestError('There was an issue when retrieving the Test');
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
    getTest: async(getTest)
};