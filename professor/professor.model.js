const mongoose = require('mongoose');
const Schema = mongoose.Schema;

console.log("commit pra testar o git")

var schemaProfessor = new Schema ({
    nome : String
});

module.exports = mongoose.model("Professor", schemaProfessor);