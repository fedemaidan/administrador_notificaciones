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
				var datos = { "id": 768570754,
  "status": "paid",
  "status_detail": null,
  "date_created": "2011-05-27T10:01:50.000-04:00",
  "date_closed": "2013-05-27T10:04:07.000-04:00",
  "order_items": [
	{
  	"item": {
    	"id": "MLB12345678",
  	  "title": "Samsung Galaxy",
    	"variation_id": null,
    	"variation_attributes": [
    	],
  	},
  	"quantity": 1,
  	"unit_price": 499,
  	"currency_id": "ARS",
	},
  ],
  "total_amount": 499,
  "currency_id": "ARS",
  "buyer": {
  	"id": "123456789",
  	"nickname": "COMPRADORTESTE",
  	"email": "b@b.com",
  	"phone": {
    	"area_code": "11",
    	"number": "12345678",
    	"extension": null,
  	},
  	"first_name": "Comprador de testes",
  	"last_name": "da Silva",
  	"billing_info": {
    	"doc_type": "CPF",
    	"doc_number": "12345678910",
  	},
  },
  "seller": {
  	"id": "123456789",
  	"nickname": "VENDEDORTESTES",
  	"email": "a@a.com",
  	"phone": {
    	"area_code": null,
    	"number": "11 12345678",
    	"extension": "11",
  	},
  	"first_name": "Vendedor de Testes",
  	"last_name": "testes de documentacao",
    },
  "payments": [
	{
  	"id": "596707837",
  	"transaction_amount": 499,
  	"currency_id": "BRL",
  	"status": "approved",
  	"date_created": null,
  	"date_last_modified": null,
	},
  ],
  "feedback": {
	"purchase": null,
	"sale": null,
  },
  "shipping": {
  	"id": 20676482441,
  	"shipment_type": "shipping",
  	"status": "handling",
      "date_created": "2013-05-27T10:03:28.000-04:00",
  	"receiver_address": {
    	"id": 12345678,
    	"address_line": "Rua dos testes 123  ",
    	"zip_code": "01001000",
    	"city": {
      	"id": "BR-SP-44",
      	"name": "São Paulo",
    	},
    	"state": {
      	"id": "BR-SP",
      	"name": "São Paulo",
    	},
    	"country": {
      	"id": "BR",
      	"name": "Brasil",
    	},
    	"latitude": null,
    	"longitude": null,
    	"comment": null,
  	},
  	"currency_id": "BRL",
  	"cost": 0,
    },
    "tags": [
    	"paid",
    	"not_delivered",
    ],
};
				guardarDatosAccion(datos)
				ejecutarAccion(datos, user.id_cuenta)
			})
		}
	})
}

function guardarDatosAccion(datos) {
    var accion = new Accion(datos)
    accion.save()
}

function ejecutarAccion(datos, cuenta_id) {

	var url = "192.168.0.9:81/app_dev.php/reserva/new";
	var moneda = datos.order_items[0].currency_id == "ARS" ? "PESOS" : "DOLARES";
	var fecha_alta = datos.date_created.split('.',1)[0].replace('T',' ');

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
            provincia_entrega: datos.shipping.receiver_address.state.name,
            localidad_entrega: datos.shipping.receiver_address.city.name,
            calle_entrega: datos.shipping.receiver_address.address_line,
            codigo_postal_entrega: datos.shipping.receiver_address.zip_code,
        }, {
        }, function (err, res, body) {
        	console.log(body)
        });
	}
}