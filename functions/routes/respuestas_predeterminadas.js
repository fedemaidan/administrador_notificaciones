const express = require('express');
const router = express.Router();
var respuestasPredeterminadas 		= require('../controller/respuestasPredeterminadas.js'); 

//RESPUESTAS PREDETERMINADAS
router.post('/respuestas_predeterminadas', respuestasPredeterminadas.post);
router.put('/respuestas_predeterminadas/:nombre', respuestasPredeterminadas.put);
router.get('/respuestas_predeterminadas', respuestasPredeterminadas.get);

module.exports = router;