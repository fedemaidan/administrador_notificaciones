var meli 		= require('mercadolibre');
var client      = require('../config/mlClient'); 
var config      = require('../config/database'); 
var mongoose    = require('mongoose');
var Notificacion= require('../models/notificacion');

mongoose.connect(config.database);

module.exports.get = (req, res) => {
	//filtras usuario, limit, offset, tipo
	let limit = 10;
	let offset = 10;
	
	let query = {
		//user_id: 73818038
	}

	Notificacion.find(query).sort({sent: 'desc'}).skip(offset).limit(limit).exec((err, notificaciones) => {
      res.json({success: true, data: notificaciones})
    })
}