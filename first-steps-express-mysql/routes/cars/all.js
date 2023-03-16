const datos = require("../../../curso/data.json")

module.exports = ( req, res ) => {
    let cars = datos.cars
    res.status(200).json( { cars } )
}
