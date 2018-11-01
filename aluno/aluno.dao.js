const mongoose = require('mongoose');
const Aluno = require('./aluno.model');
const md5 = require('md5');
const db = require('../db/db');

module.exports = {
    salvar : (aluno, fnCallback) => {
        db.connect();

        let a = new Aluno(aluno);
        a.senha = md5(a.senha);

        a.save ((e, res) => {
            db.disconnect();
            fnCallback();
        });
    },
    consultar : (aluno, fnCallback) => {
        db.connect();

        let a = new Aluno(aluno);
        Aluno.findOne({login : a.login, senha : md5(a.senha)}, (e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    }
}