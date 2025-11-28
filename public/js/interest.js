document.getElementById("jurosForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const valor = Number(document.getElementById("valor").value);
    const vencimento = document.getElementById("vencimento").value;

    const result = await fetch(`/api/interest?valor=${valor}&vencimento=${vencimento}`)
        .then(r => r.json());

    const msgBox = document.getElementById("interestMessage");
    const table = document.getElementById("interestTable");

    // Reset
    msgBox.style.display = "none";
    table.style.display = "none";

    // Se NÃO venceu
    if (!result.vencido) {
        msgBox.style.display = "block";
        msgBox.className = "alert alert-success";
        msgBox.textContent = "A conta ainda não está vencida. Nenhuma multa aplicada.";
        return;
    }

    // Caso esteja vencido → mostrar tabela
    const moeda = (v) =>
        v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    document.getElementById("r_valorOriginal").textContent = moeda(result.valorOriginal);
    document.getElementById("r_diasAtraso").textContent = result.diasAtraso + " dias";
    document.getElementById("r_multa").textContent = moeda(result.multaTotal);
    document.getElementById("r_final").textContent = moeda(result.valorFinal);

    table.style.display = "table";

    msgBox.style.display = "block";
    if (result.diasAtraso > 30) {
        msgBox.className = "alert alert-danger";
        msgBox.textContent = `⚠️ Pagamento atrasado há ${result.diasAtraso} dias! A multa está muito alta.`;
    } else {
        msgBox.className = "alert alert-warning";
        msgBox.textContent = `Pagamento atrasado por ${result.diasAtraso} dias. Multa aplicada.`;
    }
});
