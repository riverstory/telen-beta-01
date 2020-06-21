const logger = require('../configuration').logger;
const jwt = require('jsonwebtoken');
const handlers = require('../routes/router-handlers');
// const authService = require('../services/auth-service');
// const sessionService = require('../services/session-service');
const async = require('asyncawait/async');
const axios = require('axios');

function tokenValidator(req, res, next) {
    // let crateConfig = `${cloudConfig.getConnections().crateApiKey}`;
    // axios.defaults.headers.common.apiKey = crateConfig;
    // if (req.originalUrl.indexOf('api/session') === 1 || req.originalUrl === '/api/auth' || req.originalUrl.indexOf('api/terms/accepted') === 1 || req.originalUrl.indexOf('api/auth') === 1) {
        logger.info('Token Validator');
        return next();
    // }
    // if (req.session.profile) {
    //     let secret = cloudConfig.getConnections().session;
    //     let profile = req.session.profile;
    //     jwt.verify(profile.token, secret, function (err, decoded) {
    //         if (err) {
    //             logger.info('Node Token has expired - Generating new one with Session Id');
    //             //If user is loggedIn but token already expires, then create a new one and save the session
    //             return authService.generateJWT(profile.session, profile.customerKey).then((data) => {
    //                 profile.token = data;
    //                 return sessionService.saveSession(req.session, profile, (data) => {
    //                     return next();
    //                 });
    //             });
    //         } else {
    //             return next();
    //         }
    //     });
    // } else {
    //     //If request is coming from other host instead of angular app
    //     logger.info('Invalid Token - User is not logged in. Request from external server');
        // return handlers.unauthorizedHandler(res, 'Unauthorized - Invalid Token');
    // }


}
module.exports = async(tokenValidator);
