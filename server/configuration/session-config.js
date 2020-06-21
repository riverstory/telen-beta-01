var routes = require('../routes');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var logger = require('./logger-config');
const redisConfig = require('../configuration');

const sessionName = "sess:registration-completion:";

async function initializeSession(app, config) {

    // console.log ('initializeSession config', config);

    var redisClient = await redisConfig.redis(config.redis);
    var options = {
        prefix: sessionName,
        host: config.redis.host,
        port: config.redis.port,
        ttl: config.redis.ttl,
        client: redisClient
    };

    logger.info('Creating session and redis client, host ' + options.host + ':' + options.port + ' ttl ' + options.ttl);

    app.use(session({
        name: 'RCF_ID',
        store: new RedisStore(options),
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            path: '/',
            httpOnly: true,
            secure: false,
            maxAge: 86400000
        }
    }));

    app.use('/', routes);

    // Allows html5 routing, to avoid use of # in the path
    routes.get('*', function (req, res, next) {
        res.sendfile('index.html', {
            root: __base + '/dist/'
        });
    });
}

module.exports = initializeSession;