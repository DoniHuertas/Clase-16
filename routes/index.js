const express = require("express");
const router = express.Router();
const eliminarUsuarios = require("./eliminarUsuarios");
const crearUsuarios = require("./crearUsuarios");
const editarUsuarios = require("./editarUsuarios");
const consultarUsuarios = require("./consultarUsuarios");

router.use("/crear", crearUsuarios);
router.use("/eliminar", eliminarUsuarios);
router.use("/editar", editarUsuarios);
router.use("/consulta", consultarUsuarios);

router.get("/", (req, res) => {
  res.status(200).send("Accediste a /users");
});

router.post("/", (req, res) => {
  const { body } = req;
  console.log(
    `Creando el siguiente usuario: userName:${body.userName}, password:${body.password}, email:${body.email}, age:${body.age}`
  );
  res.status(200).send("Usuario creado");
});

module.exports = router;
