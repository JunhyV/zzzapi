const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

// Permitir solicitudes desde tu dominio de Vercel y localhost
const allowedOrigins = ['https://zenless-guide.vercel.app', 'http://localhost:5173'];

// Cargar variables de entorno desde .env
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Conectar a MongoDB
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

// Configurar CORS
app.use(cors({
  origin: function (origin, callback) {
    // Permitir solicitudes sin origen (como desde herramientas de desarrollo o curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Rutas de la app
app.use("/", routes());

// Puerto
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

// Ruta de prueba para CORS
app.get('/', (req, res) => {
  res.json({ message: 'CORS habilitado' });
});

// Update