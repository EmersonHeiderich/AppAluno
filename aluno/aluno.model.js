const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Type = mongoose.Schema.Types

var schemaAluno = new Schema({
    login : String,
    curso : {
        type : Type.ObjectId,
        ref : 'Curso'
    }
})

module.exports = mongoose.model("Aluno", schemaAluno)