var database = require("../database/config");
function buscarNickname(idNickname) {

    instrucaoSql = `SELECT nickname from nickname WHERE fkUsuario = ${idNickname};`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  function cadastrarNick(idNick, nickname) {
  
    instrucaoSql = `insert into nickname (nickname, fkUsuario) values ('${nickname}', ${idNick})`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  module.exports = {buscarNickname, cadastrarNick};