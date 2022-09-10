exports.paginaInicial = (request, response) => {
    response.render("index");
    return
}

exports.trataPost = (request, response) => {
    response.send(request.body);
    return
}