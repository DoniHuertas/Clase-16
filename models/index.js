const mongoose = require("mongoose");

const Usuario = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: {
    type: Number,
    required: true,
    min: [18, "Debes tener al menos 18 años para crear un usuario"],
  },
  songs: [{ type: String }],
});

module.exports = mongoose.model("Usuarios", Usuario);
