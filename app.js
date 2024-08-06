const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

require('./auth/auth');

mongoose.connect('mongodb+srv://canepadevsuporte:MJZE2scBGF3TQydC@sursalud.r44ejsg.mongodb.net/', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const app = express();

// Middleware para analizar JSON
app.use(bodyParser.json());


// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:5173', // Permitir que este origen acceda a tu backend
    credentials: true
}));

// Rutas
app.use('/', routes);

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`);
});
