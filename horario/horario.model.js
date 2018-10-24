const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaHorario = new Schema ({
    horaInicio : Date,
    horaTermino : Date,
    localTipo : String,
    localNumero : Number,
    diaSemana : String,
    disciplina : {
        type : Types.ObjectId,
        ref : 'Disciplina'
    }
});

module.exports = mongoose.model("Horario", schemaHorario);