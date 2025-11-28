Desafio Técnico – Target Sistemas
Desenvolvedor de Sistemas Jr. – Módulo Comercial (Plantão)

Este repositório contém a entrega do desafio técnico solicitado pela Target Sistemas, referente à vaga de Desenvolvedor de Sistemas Jr. – Plantão (13h às 22h).

O objetivo do projeto é demonstrar organização, lógica, clareza no código, boas práticas de desenvolvimento e capacidade de estruturar soluções de forma simples e eficiente.

🚀 Tecnologias Utilizadas

Node.js

Express.js

HTML / CSS / JavaScript Vanilla

Arquitetura em camadas (Controller → Service → Model/JSON)

Jade/Pug (engine padrão do gerador Express, mas não utilizado no front)

O projeto é inteiramente funcional em ambiente local, sem banco de dados, utilizando arquivos .json como fonte de dados.

🧩 Funcionalidades Desenvolvidas
✅ 1. Módulo de Comissão

Leitura de vendas a partir do arquivo vendas.json.

Cálculo automático da comissão com base na porcentagem definida.

Exibição organizada dos resultados na página.

✅ 2. Módulo de Estoque

Permite lançar movimentações para qualquer produto presente no arquivo estoque.json.

Cada lançamento inclui:

✔ ID único
✔ Tipo da movimentação (Entrada/Saída)
✔ Quantidade
✔ Atualização automática do estoque final
✔ Histórico de movimentações exibido em tabela
✔ Produtos carregados automaticamente

✅ 3. Módulo de Juros

Calcula multa por atraso:

Entrada de valor e data de vencimento

Cálculo de juros compostos de 2,5% ao dia

Identificação automática de atraso:

🟢 Não vencido

🟡 Atraso até 30 dias

🔴 Atraso acima de 30 dias

Exibição formatada em tabela

Mensagens coloridas (alert-success, alert-warning, alert-danger)

▶️ Como Executar o Projeto
1. Instalar dependências:
npm install

2. Rodar o projeto:
node ./bin/www

3. Acessar no navegador:
http://localhost:3000

📌 Decisões Técnicas

O projeto foi desenvolvido de forma modular, facilitando manutenção e leitura.

Cada módulo possui rota própria de API e página HTML independente, permitindo evolução futura.

Não foi utilizado banco de dados, conforme o desafio — toda a persistência é feita nos arquivos .json.

🎯 Objetivo do Desafio

Demonstrar:

Organização

Clareza

Boas práticas

Lógica de programação

Separação de responsabilidades

Fácil manutenção

Códigos limpos e compreensíveis

👤 Autor

Gustavo Pereira
Desenvolvedor Full Stack
