exports.paginaInicial = (request, response) => {
    alert(request.flash("error"));
    /* request.session.usuario = { nome: "Lucas", logado: true }; */
    /* request.flash("info", "Teste1");
    request.flash("error", "Teste2");
    request.flash("sucess", "Teste3"); */
    /* console.log(request.session.usuario); */
    response.render("index");
    return
}

exports.trataPost = (request, response) => {
    response.send(request.body);
    return
}