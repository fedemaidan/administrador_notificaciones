const express = require('express');
const router = express.Router();
var agregarCuentaController     = require('../controller/agregarCuenta.js'); 
var datosCuenta 		= require('../controller/datosCuenta.js'); 
const functions = require('firebase-functions');
var client      = require('../config/mlClient'); 
//CUENTAS
router.get('/token',			datosCuenta.dameToken );
router.get('/cuentas', 			datosCuenta.cuentas);
router.delete('/cuentas/:nickname', datosCuenta.borrarCuenta);
router.get('/iniciarConML', 	agregarCuentaController.iniciarMl);
router.get('/auth_ml', 			agregarCuentaController.authMl);
router.get('/info_test', 			(req, res) => { res.json({ env: functions.config(), client_ml: client})});

module.exports = router;