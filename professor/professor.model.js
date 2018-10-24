const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaProfessor = new Schema ({
    nome : String
});

module.exports = mongoose.model("Professor", schemaProfessor);