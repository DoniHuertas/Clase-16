require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const rutas = require("./routes");
const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const url = `mongodb+srv://${dbUser}:${dbPassword}@introductorio.m11o5il.mongodb.net/`;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", rutas);

const connectMongo = async () => {
  try {
    console.log("Intentado conectar a la DB...");
    await mongoose.connect(url);
    app.listen(3000, () => {
      console.log("Servidor levantado en el puerto 3000");
    });
  } catch (err) {
    console.error(err);
  }
};

connectMongo();
