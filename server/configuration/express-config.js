'use strict';
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var logger = require('./logger-config').withContext('Express Config');

const payloadLimit = '50m';

function configure(app) {
    logger.debug('initializing body parser size limits to ' + payloadLimit);
    app.use(bodyParser.json({
        limit: payloadLimit
    }));
    app.set('view engine', 'html');

    logger.debug('loading content routes using static path to dist directory');
    app.use(express.static(__base + 'dist'));

    app.use(bodyParser.urlencoded({
        extended: true,
        limit: payloadLimit
    }));

    app.use(cookieParser());

    app.use(function(req, res, next) {
        res.locals.ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        next();
    });
}
module.exports = configure;