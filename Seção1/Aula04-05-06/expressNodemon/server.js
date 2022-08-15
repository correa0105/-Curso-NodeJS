const express = require ("express");
const app = express();

app.get("/", (request, response) => {
    response.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button> Enviar </button>
        </form>
    `);
});

app.get("/contato", (request, response) => {
    response.send("Obrigado por entrar em contato com a gente.");
})

app.post("/", (request, response) => {
    response.send("Recebi o formulario!");
})

app.listen(3000, () => {
    console.log("Acessar http://localhost:3000")
    console.log("Servidor sendo executado na porta 3000")
})
