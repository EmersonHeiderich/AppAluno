const mongoose = require('mongoose');
const Trabalho = require('./trabalho');
const db = require('../db/db');

module.exports = {
    salvar : (trabalho, fnCallback) => {
        db.connect();

        let t = new Trabalho(trabalho);

        t.save ((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    },
    
    consultar : (fnCallback) => {
        db.connect();

        let t = new Trabalho(trabalho);
        Trabalho.find((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    }
}