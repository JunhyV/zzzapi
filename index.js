const express = require("express");
const app = express();
const routes = require("./routes/routes");
const {MongoClient, ServerApiVersion} = require('mongodb');
const mongoose = require("mongoose");
const cors = require("cors");

// Permitir solicitudes desde tu dominio de Vercel y localhost
const allowedOrigins = [
  "https://zenless-guide.vercel.app",
  "http://localhost:5173",
];

// Cargar variables de entorno desde .env
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const uri = process.env.DB_URL;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });

// Habilitar el análisis del cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar CORS
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Acceso bloqueado por CORS"));
      }
    },
  })
);

// Rutas de la app
app.use("/", routes);

// Puerto
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

// Ruta de prueba para CORS
app.get("/", (req, res) => {
  res.json({ message: "CORS habilitado" });
});
