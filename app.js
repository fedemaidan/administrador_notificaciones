'use strict';

const express = require('express'); 
var cors = require('cors');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var cron = require('node-cron');
var refrescarToken = require('./utils/refrescarToken')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

cron.schedule('* * * * *', function(){
  refrescarToken()
});

var routes = require ('./routes/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

// *** main routes *** //
app.use('/', routes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
