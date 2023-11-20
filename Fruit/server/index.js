
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const frutasRoutes = require('./routes/frutasRoutes');
const database = require('./database');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Rutas
app.use('/verduras', frutasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
