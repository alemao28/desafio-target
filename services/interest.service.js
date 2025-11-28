class InterestService {
    calculate(valor, dataVencimento) {
        const hoje = new Date();
        const venc = new Date(dataVencimento);

        const diff = hoje - venc;

        // Não venceu ainda
        if (diff <= 0) {
            return {
                valorOriginal: valor,
                diasAtraso: 0,
                valorFinal: valor,
                multaTotal: 0,
                vencido: false
            };
        }

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

        const taxa = 0.025; // 2.5% ao dia
        const valorFinal = valor * Math.pow(1 + taxa, dias);

        return {
            valorOriginal: valor,
            diasAtraso: dias,
            valorFinal: Number(valorFinal.toFixed(2)),
            multaTotal: Number((valorFinal - valor).toFixed(2)),
            vencido: true
        };
    }
}

module.exports = new InterestService();
