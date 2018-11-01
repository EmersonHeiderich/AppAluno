const mongoose = require('mongoose');
const Nota = require('./nota');
const db = require('../db/db');

module.exports = {
    salvar : (nota, fnCallback) => {
        db.connect();

        let n = new Nota(nota);

        n.save ((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    },
    
    consultar : (fnCallback) => {
        db.connect();

        let n = new Nota(nota);
        Nota.find((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    }
}