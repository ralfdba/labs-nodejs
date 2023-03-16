const datos = require("../../data.json")

module.exports = ( req, res ) => {
    let models = datos.models
    res.status(200).json( { models } )
}
