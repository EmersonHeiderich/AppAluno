const mongoose = require('mongoose');
const Horario = require('./horario');
const db = require('../db/db');

module.exports = {
    salvar : (horario, fnCallback) => {
        db.connect();

        let h = new Horario(horario);

        h.save ((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    },
    
    consultar : (fnCallback) => {
        db.connect();

        let h = new Horario(horario);
        Horario.find((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    }
}