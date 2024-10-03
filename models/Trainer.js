const mongoose = require('mongoose');
 
const TrainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
 
const Trainer = mongoose.model('Trainer', TrainerSchema);
module.exports = Trainer;