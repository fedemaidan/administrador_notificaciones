'use strict';

const express = require('express'); 
var cors = require('cors');
var bodyParser  = require('body-parser');
var needle      = require('needle');
var mongoose    = require('mongoose');
var UserML      = require('./models/userML');
var cron = require('node-cron');
var client      = require('../config/mlClient'); 

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
  res.send('Hello worldDDDDD\n');
});

// *** main routes *** //
app.use('/', routes);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


function refrescarToken() {
  var date = new Date(Date.now());
  date = date.getTime();

  UserML.find( { expiration_date: { $lt: date }}, (err, users) => {
    users.forEach( (user) => {
      
        var url = 'https://api.mercadolibre.com/oauth/token?grant_type=refresh_token&client_id='+client.id+'&client_secret='+client.secret+'&refresh_token='+user.refresh_token
        needle.post(url, {}, {}, (req, res) => {
            
            var expiration_date = new Date(Date.now());
            expiration_date = expiration_date.getTime() + (res.body.expires_in * 1000);
            
            user.token = res.body.access_token
            user.refresh_token = res.body.refresh_token
            user.expiration_date = new Date(expiration_date)

            user.save(function(err) {
              if (err) {
                console.log(err)
              }
            })

            return { res: res, req: req }
        }
      )
    })
  })
}