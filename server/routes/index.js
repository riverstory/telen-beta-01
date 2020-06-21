/**
 * Routes entry point
 * @module routes/index.js
 */
'use strict';
var express = require('express');
var router = express.Router();
var axios = require('axios');
// var cloudConfig = require('../configuration').cloudConfig;
// require('aeon-info-express')(router);
// let crateConfig = `${cloudConfig.getConnections().apikey}`;
axios.defaults.headers.common.apiKey = 12345;
var apiRoutesInitializer = require('./api');
var authRoutesInitializer = require('./auth');
var tokenValidator = require('../middleware/token-validator');

router.use('/api', tokenValidator);

apiRoutesInitializer(router, '/api');
authRoutesInitializer(router, '/auth');



// Allows html5 routing, to avoid use of # in the path
router.get('*', function(req, res, next) {
    res.sendFile('index.html', { root: __base + '/dist' });
});

module.exports = router;
