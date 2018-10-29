const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaSemestre = new Schema ({
    descricao : String,
    disciplina : {
        type : Types.ObjectId,
        ref : 'Disciplina'
    }

});

module.exports = mongoose.model("Semestre", schemaSemestre);