'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/membroController');

  // todoList Routes
  app.route('/luiz_fam')
    .get(todoList.mostrarMembro)
    .post(todoList.criarMembro);


  app.route('/luiz_fam/:membroId')
    .get(todoList.verMembro)
    .put(todoList.atualizarMembro)
    .delete(todoList.apagarMembro);
};