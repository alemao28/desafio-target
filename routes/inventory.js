var express = require("express");
var router = express.Router();
const controller = require("../controllers/inventory.controller");
const estoqueJson = require("../data/estoque.json");

router.post("/", (req, res) => {
    const { codigo, quantidade, descricao } = req.body;

    try {
        const result = controller.movimentar(codigo, quantidade, descricao);
        res.json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.get("/products", (req, res) => {
    res.json(estoqueJson.estoque);
});


module.exports = router;
