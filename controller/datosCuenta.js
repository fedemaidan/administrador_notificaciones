var meli 		= require('mercadolibre');
var client      = require('../config/mlClient'); 
var config      = require('../config/database'); 
var mongoose    = require('mongoose');
var UserML      = require('../models/userML');

mongoose.connect(config.database);


module.exports.dameToken = function (req, res ) {
	var cuenta_id = req.query.cuenta_id;
    var empresa = req.query.empresa;

    UserML.findOne( { 'id_cuenta': cuenta_id, 'empresa': empresa }, 'token', function (err, user) {
    	console.log(user)
    } )
    
	if (!cuenta_id && !empresa) {
	    res.json({success: false, msg: 'Falta cargar cuenta y/o empresa.'});
	} else {
	    
	    UserML.findOne( { 'id_cuenta': cuenta_id , 'empresa': empresa}, 'token', function (err, user) {
	    	if (err) res.json({success: false, msg: 'Hubo un problema con ML para registrar la cuenta. Por favor pruebe mas tarde'});
	    	else res.json({success: true, token: user.token });
    	})  
	}
}


