var database = require("../database/config");
function buscarQuiz(idUsuario) {

    instrucaoSql = `select pontuacaoAcertos FROM quiz order by pontuacaoAcertos desc limit 5;`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  function cadastrar(idUsuario, acertos, erros) {

    instrucaoSql = `INSERT INTO quiz (fkUsuario, pontuacaoAcertos, pontuacaoErros) values (${idUsuario}, ${acertos}, ${erros})`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  module.exports = {buscarQuiz, cadastrar}