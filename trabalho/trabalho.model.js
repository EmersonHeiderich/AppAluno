const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaTrabalho = new Schema ({
    titulo : String,
    descricao : String,
    dataEntregar : Date,
    dataEnviado : Date,
    notaTotal : Number,
    notaRecebida : Number,
    status : Number,
    disciplina : {
        type : Types.ObjectId,
        ref : 'Disciplina'
    }
});

module.exports = mongoose.model("Trabalho", schemaTrabalho);

teste
