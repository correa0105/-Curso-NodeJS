const express = require ("express");
const app = express();

app.get("/", (request, response) => {
    response.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button> Enviar Formulario </button>
        </form>
    `);
});

app.get("/testes/:Genero?/:idUsuario?", (request, response) => {
    response.send(request.params)
})

app.post("/", (request, response) => {
    response.send("Recebi o formulario!");
})

app.listen(3000, () => {
    console.log("Acessar http://localhost:3000")
    console.log("Servidor sendo executado na porta 3000")
})
