const mongoose = require('mongoose');
const Professor = require('./professor');
const db = require('../db/db');

module.exports = {
    salvar : (professor, fnCallback) => {
        db.connect();

        let p = new Professor(professor);

        p.save ((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    },
    
    consultar : (fnCallback) => {
        db.connect();

        let u = new Professor(profesor);
        Professor.find((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    }
}