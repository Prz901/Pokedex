const PokemonModel = require('../../model/mongoose-models/Pokemon')

module.exports.getById = async(req, res) => {
    res.send(await PokemonModel.findById(req.params.id))
}
module.exports.getAll = async (req, res)  => {
    res.send(await PokemonModel.find({}))
}
module.exports.getByName = async (req, res)  => {
    res.send(await PokemonModel.find({name:req.params.name}))
}