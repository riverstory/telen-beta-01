'use strict';
var logger = require(__base + 'server/configuration').logger.withContext('auth-service');
var jwt = require('jsonwebtoken');

function getNewJWT(name, session) {
    logger.info('Generating new JWT...');
    let token = jwt.sign({ name, session }, 'secret');
    return token;
}

function verifyJWT(token) {
    logger.info('verifying JWT...');
    jwt.verify(token, 'secret', (err) => {
        if (err) {
            logger.error('invalid token, denying access. ' + err);
            return false;
        } else {
            logger.info('Valid token!');
            return true;
        }
    });
}


module.exports = { getNewJWT, verifyJWT };