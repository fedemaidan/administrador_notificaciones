var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RespuestaPredeterminadaSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  nombre: {
        type: String,
        required: true
    },
  texto: {
        type: String,
        required: true
    },
  palabras_relacionadas: {
      type: [String],
  }
});

module.exports = mongoose.model('RespuestaPredeterminada', RespuestaPredeterminadaSchema);