var jwt         = require('jwt-simple');
var config      = require('../config/database'); 
var User        = require('../models/user')

module.exports = async (req, res) => {
    var token = getToken(req.headers);
    
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        const user = await User.findOne({name: decoded.name})
        
        if (!user) {
            res.status(403).send({success: false, msg: 'Fallo de autenticación.'})
            return null;
        }
        
        return user;
    }
    else {
        res.json({success: false, msg: 'Cargar token'})
        return null;
    }
}


function getToken (headers) {
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
}