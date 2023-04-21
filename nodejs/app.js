// ############################
// ### LUIS  GARCIA GARCES
// ### UNIVERSIDAD INTERNACIONAL DE LA RIOJA
// ############################

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();toString
// Conexión a MongoDB
mongoose.connect('mongodb://'+process.env.MONGODB_HOST+':'+String(process.env.MONGODB_PORT)+'/mi_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

// Iniciando el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});