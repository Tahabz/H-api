const express = require('express');
const morgan = require('morgan');
const connect = require('./db/connect');

require('dotenv').config();
const app = express();

app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.send('hello world');
});

const start = async () => {
  try {
    await connect();
    app.listen(process.env.PORT, () => {
      console.log('Server started at port', process.env.PORT);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
