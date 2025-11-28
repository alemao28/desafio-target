const service = require("../services/interest.service");

module.exports = {
    calcular: (valor, vencimento) => service.calculate(valor, vencimento)
};
