CREATE DATABASE dbHoraDoVolei;
USE dbHoraDoVolei;
DROP database dbhoradovolei;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY auto_increment,
    email VARCHAR(45),
    nome VARCHAR(45),
    senha CHAR(6)
) auto_increment = 100;

CREATE TABLE nickname (
	idNickname INT PRIMARY KEY auto_increment,
    nickname VARCHAR(45) UNIQUE,
    fkUsuario INT,
    constraint fkUsuario FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
) auto_increment = 100;


select * from usuario;

CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY auto_increment,
    fkUsuario INT,
    pontuacaoAcertos INT,
    pontuacaoErros INT,
    constraint fkUsuarioQuiz FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

select*from usuario;
    
select * from quiz;

select pontuacaoAcertos FROM quiz order by pontuacaoAcertos desc limit 5;





