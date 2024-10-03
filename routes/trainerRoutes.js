const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');
 
// Criar um treinador
router.post('/trainers', async (req, res) => {
    try {
        const newTrainer = new Trainer({
            name: req.body.name,
            age: req.body.age
        });
        const trainer = await newTrainer.save();
        res.status(201).json(trainer);
    } catch (err) {a
        res.status(400).json({ message: err.message });
    }
});
 
// Listar todos os treinadores
router.get('/trainers', async (req, res) => {
    try {
        const trainers = await Trainer.find();
        res.json(trainers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
 
// Buscar um treinador pelo ID
router.get('/trainers/:id', async (req, res) => {
    try {
        const trainer = await Trainer.findById(req.params.id);
        if (!trainer) return res.status(404).json({ message: 'Treinador não encontrado' });
        res.json(trainer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
 
module.exports = router;
 
 