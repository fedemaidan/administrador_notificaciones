var config      = require('../config/database'); 
var mongoose    = require('mongoose');
var Accion= require('../models/accion');

mongoose.connect(config.database);

module.exports.get = (req, res) => {
	//filtras usuario, limit, offset, tipo
	let limit = 10;
	let offset = 10;
	
	let query = {
		//user_id: 73818038
	}

	Accion.find(query).skip(offset).limit(limit).sort({date_created: 'desc'}).exec((err, acciones) => {
      res.json({success: true, data: acciones})
    })
}