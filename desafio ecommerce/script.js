const catalogo = [
  { id: 1, nome: "Camiseta", preco: 50, estoque: 10 },
  { id: 2, nome: "Calça Jeans", preco: 120, estoque: 5 },
  { id: 3, nome: "Tênis", preco: 250, estoque: 3 },
  { id: 4, nome: "Meias", preco: 20, estoque: 20 }
];

let carrinho = [];

function adicionarAoCarrinho(idProduto, quantidadeDesejada) {
  const produto = catalogo.find(p => p.id === idProduto);

  if (!produto) {
    console.log("Erro: Produto não encontrado.");
    return;
  }

  if (produto.estoque >= quantidadeDesejada) {
    carrinho.push({
      nome: produto.nome,
      preco: produto.preco,
      quantidade: quantidadeDesejada
    });
    
    produto.estoque -= quantidadeDesejada;
    console.log(`Sucesso: ${quantidadeDesejada}x ${produto.nome} adicionado(s) ao carrinho.`);
  } else {
    console.log("Estoque insuficiente.");
  }
}

function calcularTotal() {
  let total = 0;
  for (let item of carrinho) {
    total += item.preco * item.quantidade;
  }
  return total;
}

function finalizarCompra() {
  let valorBruto = calcularTotal();
  let desconto = 0;

  if (valorBruto > 200) {
    desconto = valorBruto * 0.10;
  }

  let valorFinal = valorBruto - desconto;

  console.log("--- Resumo da Compra ---");
  console.log("Itens:", carrinho);
  console.log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`);
  console.log(`Valor final a pagar: R$ ${valorFinal.toFixed(2)}`);

  carrinho = [];
}

adicionarAoCarrinho(2, 2);
adicionarAoCarrinho(1, 1);
finalizarCompra();