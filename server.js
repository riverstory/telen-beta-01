global.__base = __dirname + '/';
const cors = require('cors');
var express = require('express');
var app = express();
var server;
var bodyParser = require('body-parser');
var localconfig = require('config');


// const cloudConfig = require('./server/configuration/cloud-config.js');



function startServer(config) {
    var configuration = require('./server/configuration');
    var port = process.env.port || localconfig.port || 3000;

    var logger = configuration.logger.withContext('Server');
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors({
        origin: [ //Required to save the cookie
            "*"
        ], credentials: true
    }));

    configuration.express(app);

    logger.info(app.get('env'));
    logger.info('port');
    logger.info(process.env.port);
    logger.info(localconfig.port);
    logger.info(port);

    logger.info ('Configuration:' + JSON.stringify(localconfig));


    // console.log ('startServer -< config', localconfig);

    // configuration.session(app, config);
    configuration.session(app, localconfig);

    logger.info('Starting the application on port ' + port + '...');

    // console.log ('Starting the application on port ' + port + '...');

    server = app.listen(port, function () {
        logger.info('---- application started on port ' + port + '----');
        // console.log ('---- application started on port ' + port + '----');
    });
}
// ==================================================
// Start the app
// ==================================================

config = {};

// cloudConfig.initialize().then((config) => {
    startServer(config);
// });

module.exports = app;