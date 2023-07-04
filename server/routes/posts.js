const { Router } = require("express");
const { Post } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  console.log("얍");
});

module.exports = router;
