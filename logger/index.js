/* eslint-disable no-console */

const consoleLog = (message, error, callback) => {
  console.log(message, error || '');
  if (callback) {
    callback();
  }
};

// TODO: Well, real logging, no?
export default {
  error(message, error, callback) {
    if (process.env.NODE_ENV !== 'production') {
      consoleLog(message, error, callback);
    }
  },
  fatal(message, error, callback) {
    if (process.env.NODE_ENV !== 'production') {
      consoleLog(message, error, callback);
    }
  },
};
