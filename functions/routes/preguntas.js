const express = require('express');
const router = express.Router();
var preguntas   = require('../controller/preguntas.js');

//PREGUNTAS
router.delete('/pregunta/:id', preguntas.delete);
router.post('/sincronizar',    preguntas.sincronizarNuevamentePreguntas);
router.post('/responder',      preguntas.responder);
router.get('/pregunta',        preguntas.preguntas);

module.exports = router;