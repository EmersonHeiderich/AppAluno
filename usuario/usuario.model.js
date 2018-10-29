const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaUsuario = new Schema ({
    login : String,
    senha : String,
    nome : String,
    curso : {
        type : Types.ObjectId,
        ref : 'Curso'
    },
    semestre : {
        type : Types.ObjectId,
        ref : 'Semestre'
    }

});

module.exports = mongoose.model("Usuario", schemaUsuario);