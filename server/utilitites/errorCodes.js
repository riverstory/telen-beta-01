const async = require('asyncawait/async');
const logger = require('../configuration').logger.withContext('Error Codes');
const BadRequestError = require(__base + 'server/exceptions/BadRequestError');
const NotFound = require(__base + 'server/exceptions/NotFound');
const ResourceRequestException = require(__base + 'server/exceptions/ResourceRequestException');

function getErrorException(statusCode, statusText) {
    if (!statusCode && !statusText) {
        return new BadRequestError('Unhandled error has ocurred');
    } else if (isBadRequest(statusCode)) {
        return new BadRequestError(statusText);
    } else if (isResourceRequestException(statusCode)) {
        return new ResourceRequestException(statusText);
    } else if (isNotFound(statusCode)) {
        return new NotFound(statusText);
    } 
}

function isBadRequest(statusCode) {
    const errorCodes = [400, 401, 403, 409];
    return (errorCodes.indexOf(statusCode) !== -1);
}

function isResourceRequestException(statusCode) {
    const errorCodes = [504, 502, 500, 503];
    return (errorCodes.indexOf(statusCode) !== -1);
}

function isNotFound(statusCode) {
    return (statusCode === 404);
}

module.exports = {
    getErrorException: async(getErrorException)
};