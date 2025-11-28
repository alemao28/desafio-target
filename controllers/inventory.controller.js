const estoqueJson = require("../data/estoque.json");
const InventoryService = require("../services/inventory.service");

const inventory = new InventoryService(estoqueJson.estoque);

module.exports = {
    movimentar: (codigo, quantidade, descricao) => {
        return inventory.movimentar(codigo, quantidade, descricao);
    }
};
