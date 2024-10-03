const mongoose = require('mongoose');
 
const PokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true,
        default: 1
    },
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer', // Referência ao treinador
        required: true
    }
});
 
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
module.exports = Pokemon;