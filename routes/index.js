const express = require("express");
const router = express.Router();
const eliminarUsuarios = require("./eliminarUsuarios");
const crearUsuarios = require("./crearUsuarios");
const editarUsuarios = require("./editarUsuarios");
const consultarUsuarios = require("./consultarUsuarios");

router.use("/eliminar", eliminarUsuarios);
router.use("/crear", crearUsuarios);
router.use("/editar", editarUsuarios);
router.use("/consulta", consultarUsuarios);

router.get("/", (req, res) => {
  res.status(200).send("Accediste a /");
});

module.exports = router;
