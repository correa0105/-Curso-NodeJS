
const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController")
const contatoController = require("./src/controllers/contatoController");

/* ROTAS DA HOME */
route.get("/", homeController.paginaInicial);   //ROTA DA HOME A PRIMEIRA MAGINA QUE DEVE SER INICIADA.
route.post("/", homeController.trataPost);  //METODO POST, OU SEJA APÓS O FORMULARIO SER ENVIADO

/* ROTAS DE CONTATO */
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
