const nome = "Lucas";
const sobrenome = "Corrêa";

const falaNome = () => nome + " " + sobrenome;

this.functionFalaNome = falaNome;
this.strNome = nome;
this.strSobrenome = sobrenome;

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

this.Pessoa = Pessoa;