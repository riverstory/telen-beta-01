/**
 * Created by Ronald Lobo.
 */
'use strict';
var constants = require(__base + 'server/routes/constants');
var logger = require(__base + 'server/configuration').logger.withContext('routes-handlers');
function errorResponseHandler(response, error) {
    error.status = error.status || constants.codes.SERVER_FAILURE;
    logger.error(JSON.stringify(error));
    return response
        .status(error.status)
        .json(error);
}

function successResponseHandler(response, result) {
    logger.info("in success handler, building response");
    result = result || [];
    var resp = response
        .status(constants.codes.SUCCESS)
        .json(result);
    logger.info("returning response");
    return resp;
}

function validationErrorHandler(response, validationResult) {
    return response
        .status(constants.codes.BAD_REQUEST)
        .json(validationResult);
}

function validationHandlerCallback(response) {
    var handler = function(validationResult, callback) {
        if (validationResult !== true) {
            return response
                .status(constants.codes.BAD_REQUEST)
                .json({ message: validationResult});
        } else {
            callback();
        }
    };
    return handler;
}

function unauthorizedHandler(response, result) {
    return response
        .status(constants.codes.UNATHORIZED)
        .json(result);
}

module.exports = {
    errorResponseHandler,
    successResponseHandler,
    validationErrorHandler,
    validationHandlerCallback,
    unauthorizedHandler
};