module.exports = app => {
    const router = require("express").Router()
    const users = require("../controllers/all")

    router.get( "/", users.findAll )
    router.get( "/:id", users.findOne )
    router.post( "/", users.create )
    router.put( "/", users.update )

    app.use( "/api/users", router )

}