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
				var datos = {
      "id": 1632005354,
      "comments": null,
      "status": "paid",
      "status_detail": {
        "code": "item_price_restriction",
        "description": null
      },
      "date_created": "2018-02-08T08:32:42.000-04:00",
      "date_closed": "2018-02-09T07:30:54.000-04:00",
      "expiration_date": "2018-03-02T07:30:54.000-04:00",
      "date_last_updated": "2018-02-09T07:31:00.474Z",
      "hidden_for_seller": false,
      "currency_id": "ARS",
      "order_items": [
        {
          "item": {
            "seller_custom_field": null,
            "condition": "new",
            "category_id": "MLA352686",
            "variation_id": null,
            "variation_attributes": [
            ],
            "warranty": "Garantía escrita de 6 meses. Te esperamos para coordinar en INOVAMUSICNET al mejor precio garantizado!",
            "id": "MLA695449125",
            "title": "Gretsch G2622t Streamliner Center Block Guitarra En Stock!"
          },
          "quantity": 1,
          "differential_pricing_id": null,
          "sale_fee": 2015.88,
          "listing_type_id": "gold_special",
          "base_currency_id": null,
          "unit_price": 16799,
          "full_unit_price": 16799,
          "base_exchange_rate": null,
          "currency_id": "ARS",
          "manufacturing_days": null
        }
      ],
      "total_amount": 16799,
      "mediations": [
      ],
      "payments": [
        {
          "id": 3430344796,
          "order_id": 1632005354,
          "payer_id": 81419948,
          "collector": {
            "id": 73824703
          },
          "currency_id": "ARS",
          "status": "approved",
          "status_code": null,
          "status_detail": "accredited",
          "transaction_amount": 16799,
          "shipping_cost": 0,
          "overpaid_amount": 0,
          "total_paid_amount": 16799,
          "marketplace_fee": 2015.88,
          "coupon_amount": 0,
          "date_created": "2018-02-08T08:32:42.000-04:00",
          "date_last_modified": "2018-02-09T07:30:50.000-04:00",
          "card_id": null,
          "reason": "Gretsch G2622t Streamliner Center Block Guitarra En Stock!",
          "activation_uri": "http://www.mercadopago.com/mla/payments/atm/helper?payment_id=3430344796&payment_method_reference_id=2852395069&caller_id=81419948",
          "payment_method_id": "redlink",
          "installments": 1,
          "issuer_id": null,
          "atm_transfer_reference": {
            "company_id": "00814199489",
            "transaction_id": "2852395069"
          },
          "coupon_id": null,
          "operation_type": "regular_payment",
          "payment_type": "atm",
          "available_actions": [
            "refund"
          ],
          "installment_amount": null,
          "deferred_period": null,
          "date_approved": "2018-02-09T07:30:50.000-04:00",
          "authorization_code": null,
          "transaction_order_id": null
        }
      ],
      "shipping": {
        "substatus": null,
        "status": "to_be_agreed",
        "id": null,
        "service_id": null,
        "currency_id": null,
        "shipping_mode": null,
        "shipment_type": null,
        "sender_id": null,
        "picking_type": null,
        "date_created": null,
        "cost": null,
        "date_first_printed": null
      },
      "order_request": {
        "change": null,
        "return": null
      },
      "pickup_id": null,
      "buyer": {
        "id": 81419948,
        "nickname": "JPALEGRE",
        "email": "jalegre.sl0hmr+2-oge3dgmrqga2tgojy@mail.mercadolibre.com",
        "phone": {
          "area_code": null,
          "extension": "",
          "number": "2214003089",
          "verified": false
        },
        "alternative_phone": {
          "area_code": "221",
          "extension": "",
          "number": "4003089"
        },
        "first_name": "juan pablo",
        "last_name": "alegre",
        "billing_info": {
          "doc_type": "DNI",
          "doc_number": "22158371"
        }
      },
      "seller": {
        "id": 73824703,
        "nickname": "INOVAMUSICNET.COM",
        "email": "mnan.3vrfrm+2-oge3dgmrqga2tgoby@mail.mercadolibre.com",
        "phone": {
          "area_code": "(11)",
          "extension": "",
          "number": "1569203190",
          "verified": false
        },
        "alternative_phone": {
          "area_code": "",
          "extension": "",
          "number": ""
        },
        "first_name": "CARDENES",
        "last_name": "MARIANO JULIAN"
      },
      "feedback": {
        "sale": null,
        "purchase": null
      },
      "tags": [
        "not_delivered",
        "paid"
      ]
    }
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

	var url = "https://multiml:81/app_dev.php/reserva/new";
	var moneda = datos.order_items[0].currency_id == "ARS" ? "PESOS" : "DOLARES";
	var fecha_alta = datos.date_created.split('.',1)[0].replace('T',' ');

  var provincia_entrega = datos.shipping.hasOwnProperty("receiver_address") ? datos.shipping.receiver_address.state.name : "";
  var localidad_entrega = datos.shipping.hasOwnProperty("receiver_address") ? datos.shipping.receiver_address.city.name : "";
  var calle_entrega = datos.shipping.hasOwnProperty("receiver_address") ? datos.shipping.receiver_address.address_line : "";
  var codigo_postal_entrega = datos.shipping.hasOwnProperty("receiver_address") ? datos.shipping.receiver_address.zip_code : "";

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
        }, {
        }, function (err, res, body) {
        	console.log(body)
        });
	}
}