require("dotenv").config();
const express = require("express");
const app = express();
const rutas = require("./routes");
const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const url = `mongodb+srv://${dbUser}:${dbPassword}@introductorio.m11o5il.mongodb.net/`;

app.use(express.json());
app.use("/", rutas);

const connectMongo = async () => {
  try {
    console.log("Intentado conectar a la DB...");
    await mongoose.connect(url); //Contraseña incorrecta
    app.listen(3000, () => {
      console.log("Servidor levantado en el puerto 3000");
    });
  } catch (err) {
    console.error(err);
  }
};
//npm ERR! Missing script: "start"
connectMongo();
