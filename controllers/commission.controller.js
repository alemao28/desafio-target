const vendas = require("../data/vendas.json");
const service = require("../services/commission.service");

module.exports = {
    getResult: () => service.calculateCommissions(vendas)
};
