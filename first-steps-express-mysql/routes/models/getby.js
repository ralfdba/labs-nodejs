const datos = require("../../data.json")

module.exports = ( req, res ) => {
    let modelid = req.params.id * 1
    let model = datos.models.filter( c => c.carid === modelid)
    res.status(200).json( { model } )
}
