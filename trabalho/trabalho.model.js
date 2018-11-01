const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Type = mongoose.Schema.Types

var schemaTrabalho = new Schema ({
    titulo : String,
    descricao : String,
    dataEntregar : Date,
    dataEnviado : Date,
    notaTotal : Number,
    notaRecebida : Number,
    status : Number,
    disciplina : {
        type : Type.ObjectId,
        ref : 'Disciplina'
    }
});

module.exports = mongoose.model("Trabalho", schemaTrabalho);

teste
