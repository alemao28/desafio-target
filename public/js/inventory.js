// Carregar produtos do estoque (JSON original)
fetch("/api/inventory/products")
    .then(r => r.json())
    .then(produtos => {

        // Popular tabela de produtos
        const tbody = document
            .getElementById("productsTable")
            .querySelector("tbody");

        // Popular select
        const select = document.getElementById("codigo");

        produtos.forEach(p => {
            // tabela
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${p.codigoProduto}</td>
        <td>${p.descricaoProduto}</td>
        <td>${p.estoque}</td>
      `;
            tbody.appendChild(row);

            // select
            const opt = document.createElement("option");
            opt.value = p.codigoProduto;
            opt.textContent = `${p.descricaoProduto} (Cód: ${p.codigoProduto})`;
            select.appendChild(opt);
        });
    });


// Lançar movimentação
document.getElementById("movForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const codigo = Number(document.getElementById("codigo").value);
    const quantidade = Number(document.getElementById("quantidade").value);
    const descricao = document.getElementById("descricao").value;
    const tipo = document.getElementById("tipo").value;

    const qtdFinal = tipo === "saida" ? quantidade * -1 : quantidade;

    const result = await fetch("/api/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            codigo,
            quantidade: qtdFinal,
            descricao
        })
    }).then(r => r.json());

    const tbody = document
        .getElementById("inventoryTable")
        .querySelector("tbody");

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.idMov}</td>
      <td>${result.descricao}</td>
      <td>${result.tipo}</td>
      <td>${result.quantidade}</td>
      <td>${result.estoqueFinal}</td>
  `;

    tbody.appendChild(row);

    e.target.reset();
});
