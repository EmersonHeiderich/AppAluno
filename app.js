const express = require('express');
const wsAluno = require('./aluno/aluno.ws');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
  });

wsAluno(app);

app.listen(3000, () => {//arrow function
    console.log("server 3000");
})