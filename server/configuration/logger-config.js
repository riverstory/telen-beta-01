// var winston = require('winston');

const { format, createLogger, transports } = require('winston');
// const logger = winston.createLogger({
const logger = createLogger({
    level: 'debug', // set to 'info' if you want ignore debug logging
    // format: winston.format.simple(),
    format: format.combine(
      // format.label({ label: '[my-label]' }),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      //
      // The simple format outputs
      // `${level}: ${message} ${[Object with everything else]}`
      //
      // format.simple()
      //
      // Alternatively you could use this custom printf format if you
      // want to control where the timestamp comes in your final message.
      // Try replacing `format.simple()` above with this:
      //
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
      // new winston.transports.Console()
      new transports.Console()
    ]
});
const context = function context(name) {
  return {
    displayHandler: function (message, cb) {
      var display = name || '';
      if (message) {
        display += ' >> ' + message;
      }
      return cb('"' + display + '"');
    },
    errorHandler: function (message, cb) {
      return cb(message);
    },
    debug: function (message) {
      this.displayHandler(message, logger.debug);
    },
    error: function (message) {
      this.errorHandler(message, logger.error);
    },
    warn: function (message) {
      this.displayHandler(message, logger.warn);
    },
    info: function (message) {
      this.displayHandler(message, logger.info);
    }
  };
};
logger.withContext = context;
module.exports = logger;
