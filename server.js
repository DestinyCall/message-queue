require('./config/config');
const express = require('express');
const cors = require('cors');

const { setupLogging } = require('./utils/logging');

const app = express();

setupLogging(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Messenge Queue');
});

app.listen(PORT, () => {
  console.log(`Messenge broker service is running on port ${PORT}.`);
});
