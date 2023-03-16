const app = require("express")()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = 3000
const api = require("./routes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended:true } ))

mongoose.connect("mongodb://127.0.0.1:27017/curso", { useNewUrlParser:true } )//mongodb://localhost:27017/

let db = mongoose.connection

if ( !db ) {
    console.log("No connect")
} else {
    console.log("Connected")
}

app.use("/api", api)

app.listen( PORT, () => {
    console.log(`Server on ${PORT}`)
})