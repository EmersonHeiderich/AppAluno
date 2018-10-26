const mongoose = require('mongoose');
const Usuario = require('./usuario.model');
const md5 = require('md5');
const db = require('../db/db');

module.exports = {
    salvar : (usuario, fnCallback) => {
        db.connect();

        let u = new Usuario(usuario);
        u.senha = md5(u.senha);

        u.save ((e, res) => {
            db.disconnect();
            fnCallback();
        });
    },
    consultar : (usuario, fnCallback) => {
        db.connect();

        let u = new Usuario(usuario);
        Usuario.findOne({login : u.login, senha : md5(u.senha)}, (e, res) => {
            db.disconnect();
            fnCallback(res);
        });
    }
}