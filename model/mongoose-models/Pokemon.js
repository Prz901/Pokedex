const mongoose = require('mongoose')

module.exports = mongoose.model('Pokemon', {
    name: {
        type: String,
        required: true,
    },
    type: {
        type: Array,
        required: true,
    },
    abilities:{
        type:Array,
        require:true
    }
})