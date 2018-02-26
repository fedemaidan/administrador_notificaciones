'use strict';

const express = require('express'); 
var cors = require('cors');
var bodyParser  = require('body-parser');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


var routes = require ('./routes/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello worldDDDDD\n');
});

// *** main routes *** //
app.use('/', routes);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
