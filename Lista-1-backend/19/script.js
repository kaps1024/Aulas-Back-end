let produtos = [
    { nome: "Headset", preco: 299 },
    { nome: "Teclado", preco: 399 },
    { nome: "Mouse", preco: 180 },
    { nome: "Monitor", preco: 950 }
];

produtos.sort((a, b) => a.preco - b.preco);

console.log(produtos);