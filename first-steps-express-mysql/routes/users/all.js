const datos = require("../../database/config.js")
const all = {
    getAll: async ( req, res ) => {
        try {
            const [ rows, fields ] = await datos.query("select * from usuarios")
            res.status(200).json( { err:0,message:rows } )
        } catch ( error ) {
            res.status(200).json( { err:1,message:`${error}` } )
            //console.log( `Error: ${error}` )
        }
    },
    getById: async ( req, res ) => {
        try {
            const { id } = req.params
            const [ rows, fields ] = await datos.query("select * from usuarios where id = ?", [id])
            res.status(200).json( { err:0,message:rows } )
        } catch ( error ) {
            res.status(200).json( { err:1,message:`${error}` } )
            //console.log( `Error: ${error}` )
        }
    },
    create: async ( req, res ) => {
        try {
            const { name, email } = req.body
            const [ rows, fields ] = await datos.query("insert into usuarios (name,email) values (?,?)", [name,email])
            res.status(200).json( { err:0,message:rows } )
        } catch ( error ) {
            res.status(200).json( { err:1,message:`${error}` } )
        }
    }
}
module.exports = all
