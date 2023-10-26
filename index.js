let resultado = rank(201, 100)
let rankAtual = ""

function rank(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

if (resultado < 10){
    rankAtual = "Ferro"
} else if (resultado >= 11 && resultado <= 20){
    rankAtual = "Bronze"
} else if (resultado >= 21 && resultado <= 50){
    rankAtual = "Prata"
} else if (resultado >= 51 && resultado <= 80){
    rankAtual = "Ouro"
} else if (resultado >= 81 && resultado <= 90){
    rankAtual = "Diamante"
} else if (resultado >= 91 && resultado <= 100){
    rankAtual = "Lendário"
} else if (resultado >= 101){
    rankAtual = "Imortal"
}

console.log("O Herói tem o saldo de " + resultado + " e está no nível de " + rankAtual)
