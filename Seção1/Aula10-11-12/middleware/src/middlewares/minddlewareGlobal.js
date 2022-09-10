exports.middlewareGlobal = (request, response, next) => {
    console.log();

    if(request.body.cliente) {
        request.body.cliente = request.body.cliente.replace("Corrêa", "Sobrenome");
        console.log(`Vi que você postou: ${request.body.cliente}`)
    }

    next();
}