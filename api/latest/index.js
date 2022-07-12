const { Router } = require("express");

const { handlerCreateLatest } = require("./latest.controller");

const router = Router();

router.post("/", handlerCreateLatest);

module.exports = router;
