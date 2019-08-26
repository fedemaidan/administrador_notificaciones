const functions = require('firebase-functions');

module.exports = {
  'secret': 'devdacticIsAwesome',
  'database': 'mongodb://'+functions.config().db.user+':'+functions.config().db.pass+'@'+functions.config().db.url+'/'+functions.config().db.name
};