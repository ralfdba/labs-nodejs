const app = require("express")()
const routes = require("./routes")
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000
require("dotenv").config()
//routes/index.js
app.use(bodyParser.json())
app.use( "/", routes )

app.listen( port, () => {
    console.log(`Server in ${port}`)
})

