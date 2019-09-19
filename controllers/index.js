// Express imports
const express = require('express'),
    router = express.Router()

const pokemonRouter = require('./pokemon/pokemonHandler')

router.use('/pokemon', pokemonRouter)

router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router