exports.middlewareGlobal = (request, response, next) => {
    response.locals.variableLocal = "Valor da variavel aqui";
    next();
};

exports.middlewareCheckCsrfError = (error, request, response, next) => {
    if (error && "EBADCSRFTOKEN" === error.code ) {
        return response.render("404");
    }
};

exports.middlewareCsrfToken = (request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
};