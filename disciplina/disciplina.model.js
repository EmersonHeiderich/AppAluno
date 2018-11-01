const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Type = mongoose.Schema.Types

var schemaDisciplina = new Schema ({
    nome : String,
    semestre : String,
    professor : {
        type : Type.ObjectId,
        ref : 'Professor'
    },
    horario : {
        type : Type.ObjectId,
        ref : 'Horario'
    },

});

module.exports = mongoose.model("Disciplina", schemaDisciplina);