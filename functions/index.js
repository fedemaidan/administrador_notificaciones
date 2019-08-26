const functions = require('firebase-functions');
const express = require('express');
var all = require ('./routes/index.js');
var cuentasRoutes = require ('./routes/cuentas.js');
var loginRoutes = require ('./routes/login.js');
var notificacionesRoutes = require ('./routes/notificaciones.js');
var preguntasRoutes = require ('./routes/preguntas.js');
var respuestasPredererminadasRoutes = require ('./routes/respuestas_predeterminadas.js');
var refrescarToken = require ('./utils/refrescarToken');
var bodyParser  = require('body-parser');
var cors = require('cors');
var passport	  = require('passport');

require('./config/passport')(passport);

exports.cuentas = functions.https.onRequest(getExpressByRoute(cuentasRoutes));
exports.login = functions.https.onRequest(getExpressByRoute(loginRoutes));
exports.notificacion = functions.https.onRequest(getExpressByRoute(notificacionesRoutes));
exports.preguntas = functions.https.onRequest(getExpressByRoute(preguntasRoutes));
exports.respuestasPredererminadas = functions.https.onRequest(getExpressByRoute(respuestasPredererminadasRoutes));
exports.refrescarToken = functions.pubsub.schedule('every 30 minutes').onRun((context) => {
    refrescarToken()
});


function getExpressByRoute(routes) {
    const app= express();

    app.use(passport.initialize());
    
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/', routes);

    return app;
    
}