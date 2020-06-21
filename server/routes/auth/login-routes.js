'use strict';
var logger = require(__base + 'server/configuration').logger.withContext('login routes');
var routes = require('express').Router();
var authService = require('../../services/auth-service');

routes.post('', async function (req, res) {
        logger.info('attempting to login ', req.body.name);
        var token = authService.getNewJWT(req.body.name, req.body.session);
        res.cookie('authorization', token);

        // Sets up the Express Session with Redis Connect.
        req.session.user = { name: req.body.name, session: req.body.session, token: token };

        console.log (req.session);

        res.redirect('/');
    });

module.exports = routes;