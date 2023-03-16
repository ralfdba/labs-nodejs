const routes = require("express").Router()
const cars = require("./cars")
const models = require("./models")
const users = require("./users")

routes.use( "/cars", cars )
routes.use( "/models", models )
routes.use( "/users", users )

routes.get("/", (req, res, next) => {
    res.status(200).json( { err: 0, message: "Rutas OK" } )
});
module.exports = routes
