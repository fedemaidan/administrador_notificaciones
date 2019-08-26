var meli 		= require('mercadolibre');
var client      = require('../config/mlClient'); 
var config      = require('../config/database'); 
var meliObject	= new meli.Meli(client.id, client.secret);
var needle      = require('needle');
var mongoose    = require('mongoose');
var UserML      = require('../models/userML');
var validador	= require('../utils/erroresEnPeticiones.js');
const functions = require('firebase-functions');
var urlActual 	= functions.config().url.actual;

mongoose.connect(config.database);

module.exports.iniciarMl = function (req, res ) {
  var username = req.query.user;
  var url = meliObject.getAuthURL(urlActual+'/cuentas/auth_ml?username='+username)
  return res.json({success: true, url: url});
}


module.exports.authMl = function (req, res ) {
  var username = req.query.username;
  
    if (!username ) {
	    res.json({success: false, msg: 'Falta cargar usuario.'});
	} else {
	    autorizarEnML(req.query.code, urlActual+'/cuentas/auth_ml?username='+username, (req2, reso) => {
	      if (!(validador.errorEnPeticion(req2, reso))) {
	          cargarDatosDeUsuario(username,reso, res);
	       }
	       else {
	            res.json({success: false, msg: 'Hubo un problema con ML para registrar la cuenta. Por favor pruebe mas tarde'});
	          }
	    })
	}
}


function autorizarEnML(code, redirect_uri, callback) {
        var oauth_url = 'https://api.mercadolibre.com/oauth/token'
        needle.post(oauth_url, {
            grant_type: 'authorization_code',
            client_id: client.id,
            client_secret: client.secret,
            code: code,
            redirect_uri: redirect_uri
        }, {
        }, function (err, res, body) {
          callback(err, body);
        });
    };

 function cargarDatosDeUsuario(username, reso, resRetorno) {
   
   
   
  meliObject.get('users/me?access_token='+reso.access_token, (req2, datos) => {
        if (!(validador.errorEnPeticion(req2, datos))) {
          var expiration_date = new Date(Date.now());
          expiration_date = expiration_date.getTime() + (reso.expires_in * 1000);
    
          var newUser = new UserML({
              username: username,
              id_ml: reso.user_id,
              token: reso.access_token,
              refresh_token: reso.refresh_token,
              registration_date: datos.registration_date,
              nickname: datos.nickname,
              first_name: datos.first_name,
              last_name: datos.last_name,
              address: datos.address,
              phone: datos.phone,
              status: datos.status,
              reputation: datos.seller_reputation,
              expiration_date: new Date(expiration_date)
            });
            
            newUser.save(function(err) {
              if (err) {
                console.log(err, " error")
                //resRetorno.redirect(urlActual);
                return resRetorno.json({success: false, msg: 'Username ya existe.'});
              }
              else {
                //resRetorno.redirect(urlActual);
               	return resRetorno.json({success: true, msg: 'Cuenta registrada con exito'});
              }
            })
        }
        else {
          console.log("ERROR: Falló registrando usuario ML")
        }
    })
}