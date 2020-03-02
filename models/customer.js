const mongoose = require('mongoose')
//const Customer = require('./customer')

const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema)