let produtos = [
    { nome: "Teclado", estoque: 10 },
    { nome: "Mouse", estoque: 0 },
    { nome: "Monitor", estoque: 0 },
    { nome: "Headset", estoque: 5 }
];

let estoqueZero = produtos.filter(produto => produto.estoque === 0);

console.log(estoqueZero);