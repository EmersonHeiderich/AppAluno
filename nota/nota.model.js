const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaNota = new Schema ({
    notaTrabalho : Number,
    notaLivro : Number,
    notaProva : Number,
    faltas : Number,
    bimestre : Number,
    disciplina : {
        type : Types.ObjectId,
        ref : 'Disciplina'
    }
});

module.exports = mongoose.model("Nota", schemaNota);