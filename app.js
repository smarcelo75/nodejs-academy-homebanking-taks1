const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Importo rutas
const authRouter = require('./src/routers/authRouter');
const routers = require('./src/routers/routers');
// Validación de token
const { verifyToken } = require('./src/routers/validate-token');
// Middleware de rutas
app.use('/api', authRouter);
app.use('/api', verifyToken, routers);

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('MongoDB Homebanking ONLINE'))
    .catch(err => console.log(err))

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});