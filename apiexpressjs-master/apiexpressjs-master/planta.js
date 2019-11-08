const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlantaSchema = new Schema({
    nome_planta: {
        type: String,
        required: true
    },
    desc_planta: {
        type: String,
        required: true
    },
    preco_planta: {
        type: Number,
        default: 0
    },
    dt_atualizacao: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('planta', PlantaSchema);
