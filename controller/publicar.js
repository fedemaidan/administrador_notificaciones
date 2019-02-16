var meli 		= require('mercadolibre');
var client      = require('../config/mlClient'); 
var config      = require('../config/database'); 
var meliObject	= new meli.Meli(client.id, client.secret);
var needle      = require('needle');
var mongoose    = require('mongoose');
var UserML      = require('../models/userML');
var UserML      = require('../models/publicacion')
var validador	= require('../utils/erroresEnPeticiones.js');
var urlActual 	= process.env.URL_ACTUAL;//"https://multiml.xyz"

mongoose.connect(config.database);


module.exports.escuchoNotificaciones = function (req, res ) {
	guardarNotificacion(req, res)
    procesarAccion(req, res)
    res.json({success: true});
}