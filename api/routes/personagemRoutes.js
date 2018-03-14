'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/personagemController');

  // todoList Routes
  app.route('/personagens')
    .get(todoList.mostrarPersonagens)
    .post(todoList.criarPersonagem);


  app.route('/personagens/:personagemId')
    .get(todoList.verPersonagem)
    .put(todoList.atualizarPersonagem)
    .delete(todoList.apagarPersonagem);
};