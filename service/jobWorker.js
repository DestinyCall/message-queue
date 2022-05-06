const { Worker, QueueScheduler } = require('bullmq');

const { connection, concurrency, queueName, limiter } = require('../config/config');

const eventWorker = new Worker(queueName, `${__dirname}/processor.js`, {
  connection,
  concurrency,
  limiter,
});

const scheduler = new QueueScheduler(queueName, {
  connection,
});

console.info('Worker listening for jobs');

module.exports = {
  eventWorker,
  scheduler,
};
