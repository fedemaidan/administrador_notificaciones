var Pregunta    = require('../models/pregunta');
var User    = require('../models/user');
var UserML    = require('../models/userML');
var borrarPregunta = require('../utils/borrarPregunta');
var jwt         = require('jwt-simple');
var config      = require('../config/database'); // get db config file
var meli = require('mercadolibre');
var validador	= require('../utils/erroresEnPeticiones.js');
var client      = require('../config/mlClient'); 
var client_id = client.id;
var client_secret = client.secret;
var meliObject = new meli.Meli(client_id, client_secret);

module.exports.responder = (req, res) => {
    UserML.findOne({
      id_ml: req.body.user_id_ml
    }, function(err, user) {
      if (err) throw err;
      
      if (!user) {
        res.send({success: false, msg: 'No se encuentra usuario'});
      } else {
        meliObject.post('answers?access_token='+user.token, { question_id: req.body.question_id, text: req.body.text }, {} , 
          (req2, pregunta) => {
            console.log(pregunta)
            if (pregunta.status == "ANSWERED") {
              Pregunta.remove( {question_id: pregunta.id}, (err) => {
                  if (err)
                    console.log(err)
                  else
                    res.json({success: true, msg: 'Respondida correctamente'});
                } )
            }
          })
      }
    });
  };

module.exports.sincronizarNuevamentePreguntas = (req, res) => {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.findOne({
          name: decoded.name
        }, function(err, user) {
            if (err) throw err;
     
            if (!user) {
              return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
            } else {
              console.log("Voy a sincronizar");
              sincronizarNuevamentePreguntas(decoded.name, res);
            }
        });
      } else {
        return res.status(403).send({success: false, msg: 'No token provided.'});
      }
  };

module.exports.delete = async (req, res ) => {
    var token = getToken(req.headers)
    var decoded = jwt.decode(token, config.secret)
    var question_id = req.params.id
    borrarPregunta(decoded.name, question_id, res) 
  }
  
  
module.exports.preguntas = (req, res ) => {
      var token = getToken(req.headers);
      if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.findOne({
          name: decoded.name
        }, function(err, user) {
            if (err) throw err;
     
            if (!user) {
              return res.status(403).send({success: false, msg: 'Fallo de autenticación.'});
            } else {
              Pregunta.find( {username: user.name, status: 'UNANSWERED'}).sort({date_created:'asc'}).exec((err, preguntas) => {
                res.json({success: true, data: preguntas})
              })
            }
        });
      }
      else {
        res.json({success: false, msg: 'Cargar token'})
      }
  }


  async function sincronizarNuevamentePreguntas(name, res) {
    await Pregunta.remove( {username: name})
    let usersML = await UserML.find( {username: name} )
    for(var i = 0; i < usersML.length; i++) {
      let resSend = false;
      if (i == (usersML.length - 1)){
        resSend = res;
      }
      cargarPreguntas(name, usersML[i].token,0, resSend)
    }
  }
  

  getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  

  function cargarPreguntas(username, token, offset, res = false) {
    var limit = 50
    var total = 0
    var preguntasCargadas = offset
    meliObject.get('my/received_questions/search', { access_token: token, status: 'UNANSWERED', limit: limit , offset: offset }, (req, respuesta ) => {
      if (!(validador.errorEnPeticion(req, respuesta))) {
          total = respuesta.total
          for(var i = 0; i < respuesta.questions.length; i++) {
            let resSend = false;
            if (i == (respuesta.questions.length - 1)){
              resSend = res;
            }
            
            guardarPreguntaEnLaBase(req, respuesta, respuesta.questions[i], username, token, resSend)
            preguntasCargadas++
          }

          if (preguntasCargadas < total) {
            cargarPreguntas(username, token, preguntasCargadas, res)
          }
      }
      else cargarPreguntas(username, token, offset)
    })
  }
  
  function guardarPreguntaEnLaBase(req, respuesta, pregunta, username, token, res = false) {
    meliObject.get('items/'+pregunta.item_id, {}, (req2, item) => {
        meliObject.get('users/'+pregunta.from.id, {}, (req3, from) => {
            if (!(validador.errorEnPeticion(req, respuesta))) {
              var preg = new Pregunta({
              date_created: pregunta.date_created,
              question_id: pregunta.id,
              item_id: pregunta.item_id,
              item: item,
              status: pregunta.status,
              text: pregunta.text,
              deleted_from_listing: pregunta.deleted_from_listing,
              hold: pregunta.hold,
              answer: pregunta.answer,
              seller_id: pregunta.seller_id,
              from: {...pregunta.from, ...from},
              username: username
            })
  
            cargarPreguntasPrevias(req, respuesta, preg, username, token, res)
          }
          else {
            console.log("ERROR: Falló en la solicitud de item de la pregunta.")
            guardarPreguntaEnLaBase(req, respuesta, preg, username, token)
          }
        })
    })
  }
  
  
  function cargarPreguntasPrevias(req, respuesta, pregunta, username, token, res = false) {
  
    if (pregunta.from) {
      meliObject.get('questions/search',
                                    {  
                                      item: pregunta.item_id, 
                                      from: pregunta.from.id,
                                      access_token: token,
                                      sort: 'date_created_asc'
                                    }, 
                                    (req2, res2) => {
                                      pregunta.preguntas_previas = res2.questions;
                                      pregunta.cantidad_preguntas_previas = pregunta.preguntas_previas.length
  
                                      pregunta.save(function(err) {
                                          if (err) {
                                            console.log(err)
                                          }
                                          if (res)
                                            Pregunta.find( {username: username, status: 'UNANSWERED'}).sort({date_created:'asc'}).exec((err, preguntas) => {
                                              res.json({success: true, data: preguntas})
                                            })
                                        })
                                    })
    }
    else {
      console.log( "Error con la pregunta")
      console.log(pregunta)
    }
  }
  