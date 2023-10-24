const express = require("express");
const router = express.Router();
const userModel = require("../models");

router.get("/", (req, res) => {
  res.status(200).send("Accediste a /");
});

router.get("/users", (req, res) => {
  res.status(200).send("Accediste mediante GET usando Router a /users");
});

router.post("/users", async (req, res) => {
  try {
    const nuevoUsuario = await userModel.create(req.body);
    res.status(201).send(nuevoUsuario);
  } catch (err) {
    res.status(400).send(err);
    console.error(err);
  }
});

module.exports = router;
