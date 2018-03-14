'use strict';


var mongoose = require('mongoose'),
  Personagem = mongoose.model('Personagem');

exports.mostrarPersonagens = function(req, res) {
  Personagem.find({}, function(err, Personagem) {
    if (err)
      res.send(err);
    res.json(Personagem);
  });
};




exports.criarPersonagem = function(req, res) {
  var novoPersonagem = new Personagem(req.body);
  novoPersonagem.save(function(err, Personagem) {
    if (err)
      res.send(err);
    res.json(Personagem);
  });
};


exports.verPersonagem = function(req, res) {
  Personagem.findById(req.params.personagemId, function(err, personagem) {
    if (err)
      res.send(err);
    res.json(personagem);
  });
};


exports.atualizarPersonagem = function(req, res) {
  Personagem.findOneAndUpdate({_id: req.params.personagemId}, req.body, {new: true}, function(err, Personagem) {
    if (err)
      res.send(err);
    res.json(Personagem);
  });
};


exports.apagarPersonagem = function(req, res) {


  Personagem.remove({
    _id: req.params.personagemId
  }, function(err, Personagem) {
    if (err)
      res.send(err);
    res.json({ message: 'Personagem deletado' });
  });
};
