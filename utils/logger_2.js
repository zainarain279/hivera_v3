import winston from "winston";

const customTimestampFormat = winston.format((info) => {
  const timestamp = new Date().toLocaleString();
  info.timestamp = `\x1b[36m${timestamp}\x1b[0m`;
  return info;
});

const logFormat = winston.format.combine(
  customTimestampFormat(),
  winston.format.printf(({ timestamp, level, message }) => {
    let logMessage;
    const coloredLevel = winston.format.colorize().colorize(level, level.toUpperCase());

    if (message instanceof Error) {
      logMessage = `[ ${timestamp} ] [ ${coloredLevel} ] ${message.stack || message.message}`;
    } else if (typeof message === "object") {
      const colorMessage = `\x1b[36m${JSON.stringify(message)}\x1b[0m`;
      logMessage = `[ ${timestamp} ] [ ${coloredLevel} ]: ${colorMessage}`;
    } else {
      logMessage = `[ ${timestamp} ] [ ${coloredLevel} ]: ${message}`;
    }

    return logMessage;
  })
);

const logger = winston.createLogger({
  level: "info",
  format: logFormat,

  transports: [
    new winston.transports.Console({
      level: "info",
      format: logFormat,
    }),
  ],
});

export default logger;
