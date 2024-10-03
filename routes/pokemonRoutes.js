const express = require('express');
const router = express.Router();
const Pokemon = require('../models/Pokemon');
 
// Criar um Pokémon para um treinador
router.post('/pokemons', async (req, res) => {
    try {
        const newPokemon = new Pokemon({
            name: req.body.name,
            type: req.body.type,
            level: req.body.level,
            trainer: req.body.trainer // O ID do treinador precisa ser passado no corpo da requisição
        });
        const pokemon = await newPokemon.save();
        res.status(201).json(pokemon);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
 
// Listar todos os Pokémons
router.get('/pokemons', async (req, res) => {
    try {
        const pokemons = await Pokemon.find().populate('trainer'); // Populando os dados do treinador
        res.json(pokemons);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
 
// Buscar um Pokémon pelo ID
router.get('/pokemons/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id).populate('trainer');
        if (!pokemon) return res.status(404).json({ message: 'Pokémon não encontrado' });
        res.json(pokemon);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
 
module.exports = router;
 
 