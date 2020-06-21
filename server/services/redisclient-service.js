'use strict';
var logger = require(__base + 'server/configuration').logger.withContext('redis client service');
var config = require('config');
var redis = require('./../../configuration/redis-config');
const { promisify } = require('util');

async function set(key, value) {
    logger.info('Executing SET on REDIS');
    var redisClient = await (redis(config.redis));
    redisClient.set(key, value);
    redisClient.quit();
}

async function get(key, callback) {
    logger.info('Executing GET on REDIS');
    var redisClient = await (redis(config.redis));
    redisClient.get(key, callback);
    redisClient.quit();
}

async function setHash(key, value1, value2) {
    logger.info('Executing HSET on REDIS');
    var redisClient = await (redis(config.redis));
    redisClient.hset(key, value1, value2);
    redisClient.quit();
}

async function getHash(key, value1, callback) {
    logger.info('Executing HGET on REDIS');
    var redisClient = await (redis(config.redis));
    redisClient.hget(key, value1, callback);
    redisClient.quit();
}

async function setList(key, list) {
    logger.info('Executing LPUSH loop on REDIS');
    var redisClient = await (redis(config.redis));
    list.forEach(item => {
        redisClient.lpush(key, item);
    });
    redisClient.quit();
}

async function getList(key, callback) {
    logger.info('Executing LRANGE on REDIS');
    var redisClient = await (redis(config.redis));
    redisClient.lrange(key, 0, -1, callback);
    redisClient.quit();
}

module.exports.set = set;
module.exports.get = get;
module.exports.setHash = setHash;
module.exports.getHash = getHash;
module.exports.setList = setList;
module.exports.getList = getList;

module.exports.asyncGet = promisify(get);
module.exports.asyncGetHash = promisify(getHash);
module.exports.asyncGetList = promisify(getList);