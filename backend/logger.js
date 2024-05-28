const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} : ${message}`;
});

const logger = createLogger({
  format: combine(
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // new transports.Console(),
    new transports.File({ filename: 'info.log',level:"info" }),
    new transports.File({ filename: 'warn.log',level:"warn" }),
    new transports.File({ filename: 'debug.log',level:"debug" }),
    new transports.File({ filename: 'error.log',level:"error" })
  ]
});

module.exports = logger;
