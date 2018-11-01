const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Type = mongoose.Schema.Types

var schemaNota = new Schema ({
    notaTrabalho : Number,
    notaLivro : Number,
    notaProva : Number,
    faltas : Number,
    bimestre : Number,
    aluno : {
        type : Type.ObjectId,
        ref : 'Aluno'
    },
    disciplina : {
        type : Type.ObjectId,
        ref : 'Disciplina'
    }
});

module.exports = mongoose.model("Nota", schemaNota);