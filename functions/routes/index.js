const express = require('express');
const router = express.Router();
var agregarCuentaController     = require('../controller/agregarCuenta.js'); 
var escuchoNotificaciones 		= require('../controller/escuchoNotificaciones.js'); 
var datosCuenta 		= require('../controller/datosCuenta.js'); 
var notificaciones 		= require('../controller/notificaciones.js'); 
var acciones 		= require('../controller/acciones.js'); 
var respuestasPredeterminadas 		= require('../controller/respuestasPredeterminadas.js'); 
var login 		= require('../controller/login.js'); 
var preguntas   = require('../controller/preguntas.js')

//RESPUESTAS PREDETERMINADAS
router.post('/respuestas_predeterminadas', respuestasPredeterminadas.post);
router.put('/respuestas_predeterminadas/:nombre', respuestasPredeterminadas.put);
router.get('/respuestas_predeterminadas', respuestasPredeterminadas.get);

//NOTIFICACIONES
router.post('/escucho', 		escuchoNotificaciones.escuchoNotificaciones );
router.get('/notificaciones', notificaciones.get);
router.get('/acciones', acciones.get);

//CUENTAS
router.get('/token',			datosCuenta.dameToken );
router.get('/cuentas', 			datosCuenta.cuentas);
router.delete('/cuentas/:nickname', datosCuenta.borrarCuenta);
router.get('/iniciarConML', 	agregarCuentaController.iniciarMl);
router.get('/auth_ml', 			agregarCuentaController.authMl);

//PREGUNTAS
router.delete('/pregunta/:id', preguntas.delete);
router.post('/sincronizar',    preguntas.sincronizarNuevamentePreguntas);
router.post('/responder',      preguntas.responder);
router.get('/pregunta',        preguntas.preguntas);


//LOGIN
router.post('/signin', login.signin);
router.post('/authenticate', login.authenticate);
router.post('/authenticate_web', login.authenticate_web);
router.post('/recuperar_contrasena', login.recuperarContrasena);


module.exports = router;