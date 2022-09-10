require("dotenv").config()

const express = require ("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log("Conectado a Base de Dados!")
    app.emit("Pronto");
}).catch(e => {
    console.log(e);
});


const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/minddlewareGlobal")

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs")

app.use(middlewareGlobal);
app.use(routes);

app.on("Pronto", () => {
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000")
        console.log("Servidor sendo executado na porta 3000")
    })
})
