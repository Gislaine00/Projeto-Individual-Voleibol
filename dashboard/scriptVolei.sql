CREATE DATABASE dbHoraDoVolei;
USE dbHoraDoVolei;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY auto_increment,
    estadoMoradia VARCHAR(45)
);

CREATE TABLE login (
	idLogin INT,
    fkUsuario INT,
    PRIMARY KEY(idLogin, fkUsuario),
    email VARCHAR(45),
    senha CHAR(6),
    constraint fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY auto_increment,
    dataHoraTermino TIMESTAMP,
    respostaTentativa VARCHAR(45)
);

CREATE TABLE tentativa (
	idTentativa INT,
    fkLogin INT,
    fkQuiz INT,
    pontuacaoAcertos INT,
    pontuacaoErros INT,
    constraint fkLoginTentativa FOREIGN KEY(fkLogin) REFERENCES login(idLogin),
    constraint fkQuizTentativa FOREIGN KEY(fkQuiz) REFERENCES quiz(idQuiz),
    constraint pkAssociativa PRIMARY KEY (idTentativa, fkLogin, fkQuiz)
);

