const { Router } = require("express");

const {
  handlerCreateLatest,
  handlerGetLatest,
} = require("./latest.controller");

const router = Router();

router.post("/", handlerCreateLatest);
router.get("/", handlerGetLatest);

module.exports = router;
