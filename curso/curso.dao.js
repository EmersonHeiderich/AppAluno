const mongoose = require('mongoose');
const Curso = require('./curso');
const db = require('../db/db');

module.exports = {
    salvar : (curso, fnCallback) => {
        db.connect();

        let c = new Curso(curso);

        c.save ((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    },
    
    consultar : (fnCallback) => {
        db.connect();

        let c = new Curso(curso);
        Curso.find((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    }
}