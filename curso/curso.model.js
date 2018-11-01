const mongoose = require('mongoose')

const Schema = mongoose.Schema

var schemaCurso = new Schema({
    descricao : String
})

module.exports = mongoose.model("Curso", schemaCurso)