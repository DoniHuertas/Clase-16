const express = require("express");
const router = express.Router();
const schemaUsuario = require("../models");

router.get("/", async (req, res) => {
  console.log("Están accediendo a una consulta...");
  const allUsers = await schemaUsuario.find({});
  res.status(200).send(allUsers);
});

router.get("/buscarPorEdad/:edad", async (req, res) => {
  const { edad } = req.params;
  const usersSearched = await schemaUsuario.find({ age: edad });
  res.status(200).send(usersSearched);
});

router.get("/buscarPorId/:userId", async (req, res) => {
  const { userId } = req.params;
  const userSearched = await schemaUsuario.findById(userId); //65399ec2a826776c9d39b4ba
  res.status(200).send(userSearched);
});

module.exports = router;
