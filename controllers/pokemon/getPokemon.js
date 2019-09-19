const db = [
    {
        id: "1",
        name: "Picachu1"
    },
    {
        id: "2",
        name: "Picachu2"
    },
    {
        id: "3",
        name: "Picachu3"
    },
    {
        id: "4",
        name: "Picachu4"
    },
    {
        id: "5",
        name: "Picachu5"
    },
]

module.exports.getById = (req, res) => {
    res.send(db.find(pokemon => req.params.id == pokemon.id))
}
