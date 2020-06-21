var redis = require('redis');

async function initialize(config) {

    // console.log ('REDIS CONFIG', config);

    var redisConf = {
        host: config.host,
        port: config.port,
        pass: config.pass
    };

    return await redis.createClient(redisConf);
}

module.exports = initialize;