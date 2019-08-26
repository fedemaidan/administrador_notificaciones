var meli 		= require('mercadolibre');
var client      = require('../config/mlClient'); 
var config      = require('../config/database'); 
var mongoose    = require('mongoose');
var UserML      = require('../models/userML');
var getUsuario = require('../utils/getUsuario');
mongoose.connect(config.database);


module.exports.dameToken = function (req, res ) {
	var cuenta_id = req.query.cuenta_id;
    
	UserML.findOne( { 'id_cuenta': cuenta_id }, 'token', function (err, user) {
    	console.log(user)
    } )
    
	if (!cuenta_id ) {
	    res.json({success: false, msg: 'Falta cargar cuenta .'});
	} else {
	    
	    UserML.findOne( { 'id_cuenta': cuenta_id }, 'token', function (err, user) {
	    	if (err) res.json({success: false, msg: 'Hubo un problema con ML para registrar la cuenta. Por favor pruebe mas tarde'});
	    	else res.json({success: true, token: user.token });
    	})  
	}
}

module.exports.cuentas = async (req, res ) => {
	
	const user = await getUsuario(req, res)
	
	UserML.find( {username:  user.name} , (err, usersML) => {
		
		res.json({success: true, data: usersML})
	})
}

module.exports.borrarCuenta = (req, res ) => {
	 UserML.remove({ nickname: req.params.nickname}, (err, data) =>{
	 	res.json({success: true})	
	 })
} 