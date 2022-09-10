const mongoose = require("mongoose");   //MODEL SE REFERE A TUDO QUE É BASE DE DADOS

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    idade: String
});

const HomeModel = mongoose.model("Home", HomeSchema);

module.exports = HomeModel;