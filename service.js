require('./config/config');
const express = require('express');
const cors = require('cors');
const router = require('./router');
const { setupLogging } = require('./utils/logging');

const app = express();

setupLogging(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 7011;
app.use(router);

app.get('/', (req, res) => {
  res.send('Messenge Queue');
});

app.listen(PORT, () => {
  console.log(`Messenger service is running on port ${PORT}.`);
});
