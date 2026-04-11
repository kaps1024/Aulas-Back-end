function transferir(origem, destino, valor) {
    try {
        if (valor > origem.saldo) throw new Error("Saldo insuficiente.");

        origem.saldo -= valor;
        destino.saldo += valor;
    } catch (erro) {
        console.error(erro.message);
    }
}

let contaA = { saldo: 100 };
let contaB = { saldo: 50 };

transferir(contaA, contaB, 150);