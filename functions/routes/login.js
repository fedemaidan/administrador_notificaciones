const express = require('express');
const router = express.Router();
var login 		= require('../controller/login.js'); 

//LOGIN
router.post('/signin', login.signin);
router.post('/authenticate', login.authenticate);
router.post('/authenticate_web', login.authenticate_web);
router.post('/recuperar_contrasena', login.recuperarContrasena);

module.exports = router;