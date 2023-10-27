const express = require("express");
const router = express.Router();
const schemaUsuario = require("../models");

router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;
  await schemaUsuario.deleteOne({ _id: userId });
  res.status(202).send("Usuario eliminado");
});

router.delete("/", async (req, res) => {
  const usuariosEliminados = await schemaUsuario.deleteMany(req.body);
  res
    .status(202)
    .send(`Se eliminaron ${usuariosEliminados.deletedCount} usuarios.`);
});

module.exports = router;
