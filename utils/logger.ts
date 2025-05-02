import winston from "winston";


//For now using the example from winston docs
export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({format: winston.format.simple()})
  ],
});
