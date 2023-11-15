var usuarioModel = require("../models/usuarioModel");
var quizModel = require("../models/quizModel");
var nicknameModel = require("../models/nicknameModel");
const { Promise } = require("mssql");

async function autenticar(req, res) {
    try {
        const email = req.body.emailServer
        const senha = req.body.senhaServer

        if (!email) {
            return res.status(400).send('Seu email está undefined!')
        } else if (!senha) {
            return res.status(400).send('Sua senha está indefinida!')
        }

        const resultadoAutenticar = await usuarioModel.autenticar(email, senha)

        console.log(
            `\nResultados encontrados: ${resultadoAutenticar ? resultadoAutenticar.length : 0
            }`
        )
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`) // transforma JSON em String

        if (resultadoAutenticar && resultadoAutenticar.length === 1) {
            console.log(resultadoAutenticar)

            const id_Usuario = resultadoAutenticar[0].idUsuario

            const [resultadoQuiz, nickname] = await Promise.all([quizModel.buscarQuiz(id_Usuario), nicknameModel.buscarNickname(id_Usuario)]);

            if (resultadoQuiz.length > 0 && nickname.length > 0) {
                res.json({
                    id: resultadoAutenticar[0].idUsuario,
                    email: resultadoAutenticar[0].email,
                    nome: resultadoAutenticar[0].nome,
                    senha: resultadoAutenticar[0].senha,
                    quiz: resultadoQuiz,
                    nick: nickname
                });
            } else {
                res.status(204).json({ especies: [] })
            }
        } else if (!resultadoAutenticar || resultadoAutenticar.length === 0) {
            alert('Email e/ou senha inválido(s)');
        } else {
            res.status(403).send('Mais de um usuário com o mesmo login e senha!')
        }

    } catch (erro) {
        console.log(erro)
        console.log('\nHouve um erro ao realizar o login! Erro: ', erro.sqlMessage)
        res.status(500).json(erro.sqlMessage)
    }
}



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
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
    autenticar,
    cadastrar
}