'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MembroSchema = new Schema({
  nome: {
    type: String
  },
  parentesco: {
    type: String
  }
});

module.exports = mongoose.model('Membro', MembroSchema);