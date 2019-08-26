const express = require('express');
const router = express.Router();
var escuchoNotificaciones 		= require('../controller/escuchoNotificaciones.js'); 
var notificaciones 		= require('../controller/notificaciones.js'); 
var acciones 		= require('../controller/acciones.js'); 

//NOTIFICACIONES
router.post('/escucho', 		escuchoNotificaciones.escuchoNotificaciones );
router.get('/notificaciones', notificaciones.get);
router.get('/acciones', acciones.get);

module.exports = router;