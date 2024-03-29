const express = require('express');
const helmet = require('helmet');
const moment = require('moment');

const app = express();

app.use(helmet());

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  res.status(200).send(currentTime);
});


app.get('/example', (req, res) => {
  res.set('Content-Type', 'text/html');
 
  res.status(200).send("Hello");
});

module.exports = app;
