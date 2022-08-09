const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    stock: Number
});

module.exports = mongoose.model('Item',itemSchema);