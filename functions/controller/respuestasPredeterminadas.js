var meli 		= require('mercadolibre');
var client      = require('../config/mlClient'); 
var config      = require('../config/database'); 
var mongoose    = require('mongoose');
var RespuestaPredeterminada = require('../models/respuestaPredeterminada');
var getUsuario = require('../utils/getUsuario');

mongoose.connect(config.database);

module.exports.get = async (req, res) => {
    //filtras usuario, limit, offset, tipo
    const user = await getUsuario(req, res)

	let limit = 1000;
	let offset = 0;
	let order = {}
	let query = {
        username: user.name
    }

	RespuestaPredeterminada.find(query).sort(order).skip(offset).limit(limit).exec((err, respuestasPredeterminadas) => {
      res.json({success: true, data: respuestasPredeterminadas})
    })
}


module.exports.post = async (req, res) => {
	
    let respuesta = new RespuestaPredeterminada();
    respuesta.nombre = req.body.nombre;
    respuesta.texto = req.body.texto;
    respuesta.palabras_relacionadas = req.body.palabras_relacionadas;
    respuesta.save( (err) => {
        if (err) res.json({ success: false, message: err })
        res.json({success: true, message: "La respuesta fue agregada con exito."})
    });
}

module.exports.put = async (req, res) => {
	query = { nombre: req.nombre };
    let respuesta = await RespuestaPredeterminada.findOne(query);
    respuesta.texto = req.body.texto;
    respuesta.palabras_relacionadas = req.body.palabras_relacionadas;
    respuesta.save( (err) => {
        if (err) res.json({ success: false, message: err })
        res.json({success: true, message: "La respuesta fue agregada con exito."})
    });
}