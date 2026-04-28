const express = require("express");
const app = express();

const {
  criarPedido,
  listarPedidos,
  atualizarStatus
} = require("./pedidoService");

app.use(express.json());

app.post("/pedidos", (req, res) => {
  try {
    const { itens } = req.body;

    const pedido = criarPedido(itens);

    res.status(201).json(pedido);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

app.get("/pedidos", (req, res) => {
  res.json(listarPedidos());
});

app.patch("/pedidos/:id/status", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;

    const pedido = atualizarStatus(id, status);

    res.json(pedido);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
