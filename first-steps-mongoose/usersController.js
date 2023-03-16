const Users = require("./usersModels")

exports.index = async ( req, res ) => {
    let users = await Users.find({})
    res.status(200).json( { err: 0, message:"OK", data:users } )
}

exports.new = ( req, res ) => {
    let user = new Users({
        name: req.body.name,
        email: req.body.email
    })
    user.save()
    res.status(200).json( { err: 0, message:"OK", data: user } )
}

exports.update = async ( req, res ) => {
    let filter = { "_id": req.body.id }
    let update = { name: req.body.name, email:req.body.email }
    let updated = await Users.findOneAndUpdate( filter, update )
    res.status(200).json( { err: 0, message:"OK", data: updated } )
}

exports.delete = async ( req, res ) => {
    let filter = { "_id": req.body.id }
    let deleted = await Users.deleteOne( filter )
    res.status(200).json( { err: 0, message:"OK", data: deleted } )
}