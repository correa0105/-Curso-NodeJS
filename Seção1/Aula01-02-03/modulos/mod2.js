exports.multiplica = function (x, y) {
    return x * y
}

exports.cachorro = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir () {
        console.log(`${this.nome} está latindo`);
    }
}

const path = require("path");
console.log(path.resolve(__dirname, ""));