const express = require('express');
const router = express.Router();
var agregarCuentaController     = require('../controller/agregarCuenta.js'); 
var escuchoNotificaciones 		= require('../controller/escuchoNotificaciones.js'); 
var datosCuenta 		= require('../controller/datosCuenta.js'); 
var notificaciones 		= require('../controller/notificaciones.js'); 

router.get('/iniciarConML', 	agregarCuentaController.iniciarMl);
router.get('/auth_ml', 			agregarCuentaController.authMl);
router.get('/notificaciones', notificaciones.get);
router.post('/escucho', 		escuchoNotificaciones.escuchoNotificaciones );
router.get('/token',			datosCuenta.dameToken );

module.exports = router;