const pedidos = [
    { id: 1, pago: true, valor: 150 },
    { id: 2, pago: false, valor: 45 },
    { id: 3, pago: true, valor: 39 },
    { id: 4, pago: true, valor: 24 }
];

const totalComTaxa = pedidos
    .filter(p => p.pago)
    .map(p => p.valor + 10)
    .reduce((acc, valor) => acc + valor, 0);

console.log(totalComTaxa);