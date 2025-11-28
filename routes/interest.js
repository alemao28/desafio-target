var express = require("express");
var router = express.Router();
const controller = require("../controllers/interest.controller");

router.get("/", (req, res) => {
    const { valor, vencimento } = req.query;

    res.json(controller.calcular(Number(valor), vencimento));
});

module.exports = router;
