const datos = require("../../../curso/data.json")

module.exports = ( req, res ) => {
    let carid = req.params.id * 1
    let car = datos.cars.find( c => c.id === carid)
    res.status(200).json( { car } )
}
