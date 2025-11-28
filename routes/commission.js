var express = require("express");
var router = express.Router();
const controller = require("../controllers/commission.controller");

router.get("/", function (req, res) {
    res.json(controller.getResult());
});

module.exports = router;
