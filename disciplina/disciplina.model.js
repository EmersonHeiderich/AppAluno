const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaDisciplina = new Schema ({
    nome : String,
    professor : {
        type : Types.ObjectId,
        ref : 'Professor'
    }

});

module.exports = mongoose.model("Disciplina", schemaDisciplina);