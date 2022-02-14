const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use('/api', require('./src/routers/routers'));

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('MongoDB Homebanking ONLINE'))
    .catch(err => console.log(err))

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});