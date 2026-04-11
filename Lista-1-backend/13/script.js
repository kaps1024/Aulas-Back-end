let compras = [
    { nome: "Camiseta", preco: 69, quantidade: 2 },
    { nome: "Calça", preco: 85, quantidade: 1 },
    { nome: "Meia", preco: 15, quantidade: 3 }
];

let total = compras.reduce((acumulador, item) => {
    return acumulador + (item.preco * item.quantidade);
}, 0);

console.log(total);