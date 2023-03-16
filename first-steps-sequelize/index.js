const app = require("express")()
const bodyParser = require("body-parser")
//const db = require("./models")
const PORT = 3000

app.get("/", (req, res) => {
    res.json( { err:0, message: "API ORM/SQLServer" } )
})

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) )
/*
db.conn.sync( { force: true } ).then( () => {
    console.log("Sync Ok")
} )
*/
require("./routes")(app)

app.listen( PORT, () => {
    console.log(`Server in ${PORT}`)
} )