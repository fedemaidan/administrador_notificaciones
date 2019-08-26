var User      = require('../models/user');
var jwt         = require('jwt-simple');
var config      = require('../config/database'); // get db config file


module.exports.signin = (req, res) => {
  if (!req.body.name || !req.body.password || !req.body.mail) {
    res.json({success: false, msg: 'Completar nombre, password y mail.'});
  } else {
    var newUser = new User({
      name: req.body.name,
      mail: req.body.mail,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: err.message});
      }
      res.json({success: true, msg: 'Usuario nuevo creado satifactoriamente'});
    });
  }
}
 
 /* OK */
module.exports.authenticate = (req, res) => {
  autenticar(req, res);
};

module.exports.authenticate_web = (req, res) => {
  autenticar(req, res);
  /*needle.post(recaptcha_keys.url, {
            secret: recaptcha_keys.secret_key,
            response: req.body.response_captcha
        }, {}, (reqGoogle, resGoogle) => {
            if (resGoogle.body.success) {
              autenticar(req, res);
            }
            else {
              res.send({success: false, msg: 'Debe completar correctamente el captcha.'});
            }          
        });*/
};

module.exports.recuperarContrasena = (req, res) => {
  needle.post(recaptcha_keys.url, {
            secret: recaptcha_keys.secret_key,
            response: req.body.response_captcha
        }, {}, (reqGoogle, resGoogle) => {
            if (resGoogle.body.success) {
              comenzarProcesoRecuperarContrasena(req, res);
            }
            else {
              res.send({success: false, msg: 'Debe completar correctamente el captcha.'});
            }          
        });
};

module.exports.confirmaRecuperarContrasena = (req, res) => {
  cambiarContrasena(req, res)
};

function autenticar(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Usuario no encontrado'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.send({success: false, msg: 'Password incorrecta.', error: err });
        }
      });
    }
  });
}

function comenzarProcesoRecuperarContrasena(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;
    
    if (!user) {
      res.send({success: false, msg: 'Usuario no encontrado'});
    } else {
      if (user.password_pendiente == null) {
        user.password_pendiente = req.body.password
        user.token_password_pendiente = stringGen(100);

        user.save(function(err) {
          if (err) {
            return res.json({success: false, msg: err.message});
          }
          crearPedidoDeEnvioDeMail( req.body.name , user.mail,  user.token_password_pendiente )
          res.json({success: true, msg: 'Proceso recuperar contraseña comenzado correctamente'});
        });
      }
      else {
        res.json({success: false, msg: 'Tiene un proceso de recuperación de contraseña pendiente. Debe completar el mismo.'});
      }

    }
  });
}



function cambiarContrasena(req, res) {

  User.findOne({
    name: req.query.user,
    token_password_pendiente: req.query.token
  }, function(err, user) {
    if (err) throw err;
    
    if (!user) {
      res.send({success: false, msg: 'Datos incorrectos'});
    } else {
      user.password = user.password_pendiente
      user.password_pendiente = null
      user.token_password_pendiente = null

      user.save(function(err) {
            res.redirect('http://multiml.com')
            res.end();
          }
        )
    }
  });   
}


function crearPedidoDeEnvioDeMail(username, mail,  token) {
  needle.post(mailer.url, {
              username: username,
              mail: mail,
              token: token
          }, {}, (reqMail, resMail) => {
            console.log("Tire mail")
        });
}

function stringGen(len)
{
    var text = " ";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    
    return text;
}