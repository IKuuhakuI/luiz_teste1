'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PersonagemSchema = new Schema({
  name: {
    type: String
  },
  raca: {
    type: String
  },
  jogoFavorito: {
    type: String
  }
});

module.exports = mongoose.model('Personagem', PersonagemSchema);