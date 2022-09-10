const HomeModel = require("../models/HomeModel");

HomeModel.create({
    titulo: "Paola Borges Torres",
    idade: "21"
}).then(data => console.log(data)).catch(err => console.log(err));

exports.paginaInicial = (request, response) => {
    response.render("index");
    return
}

exports.trataPost = (request, response) => {
    response.send(request.body);
    return
}