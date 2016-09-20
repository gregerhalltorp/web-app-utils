import onFinished from 'on-finished';
import logger from '../logger';

export default function (req, res, next) {
  req.startTime = Date.create(); // eslint-disable-line no-param-reassign
  onFinished(res, (error, finishedResp) => {
    req.endTime = Date.create(); // eslint-disable-line no-param-reassign
    if (error) {
      logger.error({
        clientip: req.headers['x-forwarded-for'] || req.ip,
        startTime: req.startTime,
        endTime: req.endTime,
        requestTime: req.endTime.millisecondsSince(req.startTime),
        statusCode: finishedResp.statusCode,
        originalUrl: req.originalUrl,
        error,
      });
    } else {
      logger.info({
        clientip: req.headers['x-forwarded-for'] || req.ip,
        startTime: req.startTime,
        endTime: req.endTime,
        requestTime: req.endTime.millisecondsSince(req.startTime),
        statusCode: finishedResp.statusCode,
        originalUrl: req.originalUrl,
      });
    }
  });
  next();
}
