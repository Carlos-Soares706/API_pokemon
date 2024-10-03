require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const pokemonRoutes = require('./routes/pokemonRoutes');
const trainerRoutes = require('./routes/trainerRoutes');

// Conexão ao MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado'))
    .catch((error) => console.error('Erro ao conectar no MongoDB:', error));

// Rotas
app.use('/pokemon', pokemonRoutes);
app.use('/trainer', trainerRoutes);

// Inicializar servidor
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
