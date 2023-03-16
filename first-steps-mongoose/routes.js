const router = require("express").Router()
const users = require("./usersController")

router.get( "/", ( req, res) => {
    res.status(200).json( { err: 0, message: "API ODM MongoDB ROUTE" } ) 
} )

router.route("/users").get(users.index)
router.route("/users").put(users.update)
router.route("/users").post(users.new)
router.route("/users").delete(users.delete)

module.exports = router