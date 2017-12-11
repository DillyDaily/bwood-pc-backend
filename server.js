const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./config/routes.js'));

app.listen(port, function() {
  console.log("Listening on port: ", port);
})
