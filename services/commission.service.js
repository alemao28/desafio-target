class CommissionService {
    calculateCommissions(data) {
        const result = {};

        for (const venda of data.vendas) {
            const vendedor = venda.vendedor;
            const valor = venda.valor;

            if (!result[vendedor]) result[vendedor] = 0;

            let comissao = 0;

            if (valor >= 500) comissao = valor * 0.05;
            else if (valor >= 100) comissao = valor * 0.01;

            result[vendedor] += comissao;
        }

        return result;
    }
}

module.exports = new CommissionService();
