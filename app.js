const express = require('express');
const wsUsuario = require('./usuario/usuario.ws');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
  });

wsUsuario(app);

app.listen(3000, () => {//arrow function
    console.log("server 3000");
})