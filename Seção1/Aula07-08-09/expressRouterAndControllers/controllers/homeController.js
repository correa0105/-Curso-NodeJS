exports.paginaInicial = (request, response) => {
    response.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button> Enviar Formulario </button>
    </form>
`);
}

exports.trataPost = (request, response) => {
    response.send("Sua nova rota de POST");
}