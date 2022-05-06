const { Queue } = require('bullmq');

const { connection, queueName } = require('../config/config');

const eventQueue = new Queue(queueName, {
  connection,
});

console.info('Queue listening for jobs');
module.exports = {
  eventQueue,
};
