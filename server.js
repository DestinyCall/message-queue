const express = require('express');
const cors = require('cors');
const { setupLogging } = require('./utils/logging');
const { eventQueue } = require('./service/addJob');
const { eventWorker } = require('./service/jobWorker');
const app = express();

setupLogging(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Messenge Queue');
});

app.post('/', async (req, res) => {
  await eventQueue.add('notification-queue', {
    title: 'FCM Notification',
    body: 'Created with bullmq worker',
    payload: {
      user: '1234',
      data: '888989',
    },
  });
  console.log(`Enqueued an notification job`);
  res.send('Enqueued an notification job');
});

eventWorker.on('completed', (job) => console.info(`Completed job ${job.id} successfully`));
eventWorker.on('failed', (job, err) => console.info(`Failed job ${job.id} with ${err}`));

app.listen(PORT, () => {
  console.log(`Messenge broker service is running on port ${PORT}.`);
});
