export default function logger(message, error, callback) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(message, error);
    callback();
  } else {
    console.log(message, error);
    callback();
  }
}
