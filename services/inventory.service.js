const crypto = require("crypto");

class InventoryService {
    constructor(data) {
        this.estoque = data;
    }

    movimentar(codigoProduto, quantidade, descricao) {
        const produto = this.estoque.find(p => p.codigoProduto === codigoProduto);
        if (!produto) throw new Error("Produto não encontrado");

        const idMov = crypto.randomUUID();
        produto.estoque += quantidade;

        return {
            idMov,
            descricao,
            tipo: quantidade > 0 ? "Entrada" : "Saída",
            quantidade,
            estoqueFinal: produto.estoque
        };
    }
}

module.exports = InventoryService;
