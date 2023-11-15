CREATE DATABASE dbHoraDoVolei;
USE dbHoraDoVolei;
DROP database dbhoradovolei;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY auto_increment,
    email VARCHAR(45),
    nome VARCHAR(45),
    senha CHAR(6)
);

CREATE TABLE nickname (
	idNickname INT PRIMARY KEY auto_increment,
    nickname VARCHAR(45) UNIQUE,
    fkUsuario INT,
    constraint fkUsuario FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY auto_increment,
    dataHoraConclusão TIMESTAMP,
    respostaTentativa VARCHAR(45)
);

CREATE TABLE tentativa (
	idTentativa INT,
    fkUsuario INT,
    fkQuiz INT,
    pontuacaoAcertos INT,
    pontuacaoErros INT,
    constraint fkUsuarioTentativa FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario),
    constraint fkQuizTentativa FOREIGN KEY(fkQuiz) REFERENCES quiz(idQuiz),
    constraint pkAssociativa PRIMARY KEY (idTentativa, fkUsuario, fkQuiz)
);

