var mongoose    = require('mongoose');
var Notificacion      = require('../models/notificacion');
var UserML      = require('../models/userML');
var Accion      = require('../models/accion');
var meli 		= require('mercadolibre');
var client      = require('../config/mlClient'); 
var meliObject	= new meli.Meli(client.id, client.secret);
var needle      = require('needle');

module.exports.escuchoNotificaciones = function (req, res ) {
	guardarNotificacion(req, res)
  procesarAccion(req, res)
  res.json({success: true});
}

function guardarNotificacion(req, reso) {
	var notificacion = new Notificacion({ 
		resource: req.body.resource,
	    user_id: req.body.user_id,
	    topic: req.body.topic,
	    application_id: req.body.application_id,
	    attempts: req.body.attempts,
	    sent: req.body.sent,
	    received: req.body.received
	})

	notificacion.save(function(err) {
      if (err) {
        console.log(err)
      }
    })
}

function procesarAccion(req, res) {
	UserML.findOne({
    	id_ml: req.body.user_id
  	  }, (err, user) => {
      if (user) {
			meliObject.get( req.body.resource, { access_token: user.token}, (request, datos ) => {
				guardarDatosAccion(datos)
				//ejecutarAccion(datos, user.id_cuenta)
			})
		}
	})
}

function guardarDatosAccion(datos) {
    var accion = new Accion(datos)
    accion.save()
}

function ejecutarAccion(datos, cuenta_id) {

  var url =  "https://clientesyoutec.com.ar/reserva/new";
  
	var moneda = datos.order_items[0].currency_id == "ARS" ? "PESOS" : "DOLARES";
	var fecha_alta = datos.date_closed.split('.',1)[0].replace('T',' ');

  var provincia_entrega = datos.shipping.hasOwnProperty("receiver_address") ? datos.shipping.receiver_address.state.name : "";
  var localidad_entrega = datos.shipping.hasOwnProperty("receiver_address") ? datos.shipping.receiver_address.city.name : "";
  var calle_entrega = datos.shipping.hasOwnProperty("receiver_address") ? datos.shipping.receiver_address.address_line : "";
  var codigo_postal_entrega = datos.shipping.hasOwnProperty("receiver_address") ? datos.shipping.receiver_address.zip_code : "";

  meliObject.get('items/'+datos.order_items[0].item.id, (req2, item) => { 
  	for (var i = 0; i < datos.order_items[0].quantity; i++)
  	{
  		needle.post(url, {
  			      orden_ml_id: datos.id,
              fecha_alta: fecha_alta,
              productoNoCargado: datos.order_items[0].item.title,
              moneda: moneda,
              precio: datos.order_items[0].unit_price,
              cuenta_id: cuenta_id,
              nick_cliente: datos.buyer.nickname,
              mail_cliente: datos.buyer.email,
              nombre_cliente: datos.buyer.first_name+" "+datos.buyer.last_name,
              telefono_cliente: datos.buyer.phone.area_code+ " "+datos.buyer.phone.number+" "+datos.buyer.phone.extension,
              numero_documento_cliente: datos.buyer.billing_info.doc_number,
              provincia_entrega: provincia_entrega,
              localidad_entrega: localidad_entrega,
              calle_entrega: calle_entrega,
              codigo_postal_entrega: codigo_postal_entrega,
              link: item.permalink
          }, {
          }, function (err, res, body) {
          	if (err) console.log(err)
              else console.log(body)
          });
  	}
  })
}