const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Conectado ao banco de dados`))
    .catch((err) => console.error(`Erro ao conectar ao banco de dados`, err));
