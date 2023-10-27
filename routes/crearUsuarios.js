const express = require("express");
const router = express.Router();
const schemaUsuario = require("../models");

router.post("/", async (req, res) => {
  try {
    await schemaUsuario.create(req.body);
    res.status(201).send("Usuario de prueba creado");
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

module.exports = router;
