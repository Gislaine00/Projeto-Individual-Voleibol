var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var id = req.body.idServer;

    /* var idUsuario = req.params.idUsuario; */

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seus acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Seus erros está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
     }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(id, acertos, erros)
            .then(
                function (resultado) {
                    res.status(201).json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}