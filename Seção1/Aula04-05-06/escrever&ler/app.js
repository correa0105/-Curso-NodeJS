const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");

const escrever = require("./modules/escrever");
const ler = require("./modules/ler");

/* const peoples = [
    {nome: "Joao"},
    {nome: "Maria"},
    {nome: "Lucas"},
    {nome: "Eduardo"},
    {nome: "Guilherme"},
]

const json = JSON.stringify(peoples, " ", 2); */

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    rederizaDados(dados);
}

function rederizaDados(dados) {
    dados = JSON.parse(dados);

    dados.forEach(value => console.log(value.nome))
}

lerArquivo(caminhoArquivo)