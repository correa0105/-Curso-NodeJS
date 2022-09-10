exports.paginaInicial = (request, response) => {
    response.render("index");
}

exports.trataPost = (request, response) => {
    response.send("Sua nova rota de POST");
}