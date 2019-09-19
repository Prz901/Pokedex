// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const getPokemon = require('./getPokemon')
const createPokemon = require('./createPokemon')
// 
router.get('/:id', getPokemon.getById)
router.get('/', getPokemon.getAll)

router.get('/name/:name', getPokemon.getByName)

router.post('/',createPokemon.create)

module.exports = router