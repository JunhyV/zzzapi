const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

// Cargar variables de entorno desde .env
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Conectar mongo
//const uri = "mongodb://localhost:27017/zzzapi";
const uri = process.env.DB_URL;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });

// Crear el servidor
const app = express();

// Habilitar Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas de la app
app.use("/", routes());

// Puerto
app.listen(PORT);
