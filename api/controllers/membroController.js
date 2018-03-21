'use strict';


var mongoose = require('mongoose'),
  Membro = mongoose.model('Membro');

exports.mostrarMembro = function(req, res) {
  Membro.find({}, function(err, Membro) {
    if (err)
      res.send(err);
    res.json(Membro);
  });
};




exports.criarMembro = function(req, res) {
  var novoMembro = new Membro(req.body);
  novoMembro.save(function(err, Membro) {
    if (err)
      res.send(err);
    res.json(Membro);
  });
};


exports.verMembro = function(req, res) {
  Membro.findById(req.params.membroId, function(err, luiz_fam) {
    if (err)
      res.send(err);
    res.json(luiz_fam);
  });
};


exports.atualizarMembro = function(req, res) {
  Membro.findOneAndUpdate({_id: req.params.membroId}, req.body, {new: true}, function(err, Membro) {
    if (err)
      res.send(err);
    res.json(luiz_fam);
  });
};


exports.apagarMembro = function(req, res) {


  Membro.remove({
    _id: req.params.membroId
  }, function(err, Membro) {
    if (err)
      res.send(err);
    res.json({ message: 'Membro deletado' });
  });
};
