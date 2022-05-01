-- Criar Evento

INSERT INTO evento (nome) VALUES ('Encontro de Nodejs');
INSERT INTO evento (nome) VALUES ('Encontro de Postgresql');

-- Criar Participantes

INSERT INTO participante (nome) VALUES ('Carlos');
INSERT INTO participante (nome) VALUES ('Augusto');
INSERT INTO participante (nome) VALUES ('Janaina');
INSERT INTO participante (nome) VALUES ('Rafael');

-- Adicionar participantes do evento Node.js

INSERT INTO evento_participante (evento_id, participante_id) VALUES (1, 1);
INSERT INTO evento_participante (evento_id, participante_id) VALUES (1, 2);
INSERT INTO evento_participante (evento_id, participante_id) VALUES (1, 3);

-- Adicionar participantes do evento Postgresql

INSERT INTO evento_participante (evento_id, participante_id) VALUES (2,3);
INSERT INTO evento_participante (evento_id, participante_id) VALUES (2,4);