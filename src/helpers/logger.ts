import winston, { format } from 'winston';

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(
      info =>
        `${info.timestamp} ${info.level}: ${
          typeof info.message === 'object' ? JSON.stringify(info.message, null, 2) : info.message
        }`
    )
  ),
  transports: [new winston.transports.Console({ level: 'debug' })],
});

export default logger;
