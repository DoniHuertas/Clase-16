const express = require("express");
const router = express.Router();
const schemaUsuario = require("../models");

router.put("/:userId", async (req, res) => {
  const { userId } = req.params;
  const cambios = req.body;
  await schemaUsuario.findByIdAndUpdate(userId, cambios);
  res.status(202).send("Usuario editado.");
});

module.exports = router;
