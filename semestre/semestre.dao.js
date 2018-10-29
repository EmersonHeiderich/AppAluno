const mongoose = require('mongoose');
const Semestre = require('./semestre.model');
const db = require('../db/db');

module.exports = {

    salvar : (semestre, fnCallback) => {
        db.connect();

        let s = new Semestre(semestre);

        s.save ((e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    },  

    listar : (semestre, fnCallback) => {
        db.connect();

        let q = Semestre.find({});
        q.exec( (e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    }
}