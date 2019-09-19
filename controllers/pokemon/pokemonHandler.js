// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const getPokemon = require('./getPokemon')
// 
router.get('/:id', getPokemon.getById)

module.exports = router