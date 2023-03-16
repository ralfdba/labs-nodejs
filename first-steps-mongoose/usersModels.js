const mongoose = require("mongoose")
const usersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: String,
        tags: String,
        created: {
            type: Date,
            default: Date.now
        }
    }
)

const Users = mongoose.model( "demo", usersSchema )//nombre de la coleccion, schema creado
module.exports = Users