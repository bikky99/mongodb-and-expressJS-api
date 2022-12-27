const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
    ranking: {
        type: 'string',
        required: true,
        unique: true
    },
    name: 'string',
    required: true,
    trim: true,
})