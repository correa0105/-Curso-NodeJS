exports.paginaInicial = (request, response) => {
    response.render("index", {
        title: "Pagina de Teste",
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return
}

/* exports.trataPost = (request, response) => {
    response.send(request.body);
    return
} */