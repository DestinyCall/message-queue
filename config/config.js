if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
module.exports = {
  queueName: process.env.QUEUE_NAME || 'eventqueue',
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY, 10) || 1,
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || '6379',
    password: process.env.REDIS_PWD,
  },
  limiter: {
    max: parseInt(process.env.MAX_LIMIT, 10) || 1,
    duration: parseInt(process.env.DURATION_LIMIT, 10) || 1000,
  },
};
