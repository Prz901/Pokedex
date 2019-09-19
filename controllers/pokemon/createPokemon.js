const PokemonModel = require('../../model/mongoose-models/Pokemon')

module.exports.create = (req, res) => {
    res.send(PokemonModel.create(req.body))
}
