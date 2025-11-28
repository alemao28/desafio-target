fetch("/api/commission")
    .then(r => r.json())
    .then(data => {
        const tbody = document
            .getElementById("commissionTable")
            .querySelector("tbody");

        Object.entries(data).forEach(([vendedor, valor]) => {
            const row = document.createElement("tr");

            row.innerHTML = `
        <td>${vendedor}</td>
        <td>R$ ${valor.toFixed(2)}</td>
      `;

            tbody.appendChild(row);
        });
    });
