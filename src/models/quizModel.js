var database = require("../database/config");
function buscarQuiz(idUsuario) {

    instrucaoSql = `select dataHoraConclusão, respostaTentativa, pontuacaoAcertos, pontuacaoErros FROM quiz
    JOIN tentativa ON tentativa.fkQuiz = quiz.idQuiz
    WHERE fkUsuario = ${idUsuario};`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  module.exports = {buscarQuiz};