const { strNome, strSobrenome, functionFalaNome, Pessoa } = require("./mod1");

console.log(strNome);
console.log(strSobrenome);
console.log(functionFalaNome());

const p1 = new Pessoa("Rogério Seni");
console.log(p1.nome)