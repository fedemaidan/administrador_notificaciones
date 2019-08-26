var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicacionSchema = new Schema({
  data: {
        type: Object,
    },
  visualizaciones: {
        type: Number,
    },
  stock: {
      type: Number,
  }
});

module.exports = mongoose.model('Publicacion', PublicacionSchema);