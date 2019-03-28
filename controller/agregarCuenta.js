var meli 		= require('mercadolibre');
var client      = require('../config/mlClient'); 
var config      = require('../config/database'); 
var meliObject	= new meli.Meli(client.id, client.secret);
var needle      = require('needle');
var mongoose    = require('mongoose');
var UserML      = require('../models/userML');
var validador	= require('../utils/erroresEnPeticiones.js');
var urlActual 	= process.env.URL_ACTUAL;//"https://multiml.xyz"

mongoose.connect(config.database);

module.exports.iniciarMl = function (req, res ) {
	var cuenta_id = req.query.cuenta_id;
  var empresa = req.query.empresa;
  var datos = {}
  datos.cuenta_id = cuenta_id
  datos.empresa = empresa
  console.log(datos," datos")
  var url = meliObject.getAuthURL(urlActual+'/auth_ml?datos='+JSON.stringify(datos))
  console.log(url)
  return res.redirect(url);
}


module.exports.authMl = function (req, res ) {
  var datos = JSON.parse(req.query.datos);
	var cuenta_id = datos.cuenta_id;
  var empresa = datos.empresa;
  console.log("cuenta ",cuenta_id)
  console.log("empresa ",empresa)

    if (!cuenta_id ) {
	    res.json({success: false, msg: 'Falta cargar usuario.'});
	} else {
	    autorizarEnML(req.query.code, urlActual+'/auth_ml?cuenta_id='+cuenta_id+'&empresa='+empresa, (req2, reso) => {
	      if (!(validador.errorEnPeticion(req2, reso))) {
            console.log("Agrego usuario "+cuenta_id);
	          cargarDatosDeUsuario(cuenta_id,reso, empresa);
	          res.redirect('http://notiml.com/');
	       }
	       else {
	            res.json({success: false, msg: 'Hubo un problema con ML para registrar la cuenta. Por favor pruebe mas tarde'});
	          }
	    })
	}
}


function autorizarEnML(code, redirect_uri, callback) {
        var self = this;
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

 function cargarDatosDeUsuario(id_cuenta, reso, empresa) {
 	
  meliObject.get('users/me?access_token='+reso.access_token, (req2, datos) => {
        if (!(validador.errorEnPeticion(req2, datos))) {
          console.log(reso)
          console.log(datos)
          var expiration_date = new Date(Date.now());
          expiration_date = expiration_date.getTime() + (reso.expires_in * 1000);
    
          var newUser = new UserML({
              empresa: empresa,  
              id_cuenta: id_cuenta,
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
                console.log(err)
              	console.log("ERROR: usuario repetido")
                return {success: false, msg: 'Username ya existe.'};
              }
              else {
               	return {success: true, msg: 'Cuenta registrada con exito'};
              }
            })
        }
        else {
          console.log("ERROR: Falló registrando usuario ML")
        }
    })
}