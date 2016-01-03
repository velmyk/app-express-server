'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const mongoose = require('mongoose');
const config = require('./server/config/env');
const morgan = require('morgan');

mongoose.Promise = require('q').Promise;

mongoose.connect(config.mongo.uri, (err) => {
	err ? console.error(err) : console.log('mongo connected');
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


require('./server')(app);

app.listen(port, (err) => {
	err ? console.error(err) : console.log('Express server listening on port ' + port);
});



