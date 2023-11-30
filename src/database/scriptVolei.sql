CREATE DATABASE dbHoraDoVolei;
USE dbHoraDoVolei;
DROP database dbhoradovolei;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY auto_increment,
    email VARCHAR(45),
    nome VARCHAR(45),
    senha CHAR(6)
) auto_increment = 100;

INSERT INTO usuario VALUES
(null, 'antonia@gmail.com', 'Antonia', '123456'),
(null,'luan@gmail.com', 'Luan', '123456'),
(null,'ronaldo@gmail.com', 'Ronaldo', '000111'),
(null,'gislaine@gmail.com', 'Gislaine', '121314'),
(null,'izadora@gmail.com', 'Izadora', '010203');

select * from usuario;

CREATE TABLE nickname (
	idNickname INT PRIMARY KEY auto_increment,
    nickname VARCHAR(45) UNIQUE,
    fkUsuario INT,
    constraint fkUsuario FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
) auto_increment = 100;

INSERT INTO nickname VALUES
(null,'Maria', 100),
(null,'Lu', 101),
(null,'Ro', 102),
(null,'Gis', 103),
(null,'Iza', 104);

select * from nickname;

CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY auto_increment,
    fkUsuario INT,
    pontuacaoAcertos INT,
    pontuacaoErros INT,
    constraint fkUsuarioQuiz FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO quiz VALUES
(null,100, 10, 0),
(null,101, 10, 0),
(null,102, 8, 2),
(null,103, 7, 3),
(null,104, 5, 5);

select * from quiz;






