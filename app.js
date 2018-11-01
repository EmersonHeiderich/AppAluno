const express = require('express');

const wsAluno = require('./aluno/aluno.ws');
const wsCurso = require('./curso/curso.ws');
const wsDisciplina = require('./disciplina/disciplina.ws');
const wsHorario = require('./horario/horario.ws');
const wsNota = require('./nota/nota.ws');
const wsProfessor = require('./professor/professor.ws');
const wsTrabalho = require('./trabalho/trabalho.ws');


const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
  });

wsAluno(app);
wsCurso(app);
wsDisciplina(app);
wsHorario(app);
wsNota(app);
wsProfessor(app);
wsTrabalho(app);

app.listen(3000, () => {//arrow function
    console.log("server 3000");
})