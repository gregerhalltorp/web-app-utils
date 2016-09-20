import onFinished from 'on-finished';
import logger from '../logger';

export default function (req, res, next) {
  req.startTime = new Date(); // eslint-disable-line no-param-reassign
  onFinished(res, (error, finishedResp) => {
    req.endTime = new Date(); // eslint-disable-line no-param-reassign
    const millisecondsBetween = req.endTime.getMilliseconds() - req.startTime.getMilliseconds();
    if (error) {
      logger.error({
        clientip: req.headers['x-forwarded-for'] || req.ip,
        startTime: req.startTime,
        endTime: req.endTime,
        requestTime: millisecondsBetween,
        statusCode: finishedResp.statusCode,
        originalUrl: req.originalUrl,
        error,
      });
    } else {
      logger.info({
        clientip: req.headers['x-forwarded-for'] || req.ip,
        startTime: req.startTime,
        endTime: req.endTime,
        requestTime: millisecondsBetween,
        statusCode: finishedResp.statusCode,
        originalUrl: req.originalUrl,
      });
    }
  });
  next();
}
