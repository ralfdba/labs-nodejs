const models = require("../models")
const usersmodel = models.users
const Op = models.Sequelize.Op

//Insert

exports.create = ( req, res) => {
    if ( !req.body.name ) {
        res.status(200).json( { err: 1, message: "Todos los campos son obligatorios" } )
    }
    let users = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
    }
    usersmodel.create( users )
    .then( data => {
        res.status(200).json( { err: 0, message: data } )
    } )
    .catch( err => {
        res.status(200).json( { err: 2, message: `${err}` } )
    } )
}

//Get All
exports.findAll = ( req, res ) => {
    let name = req.query.name
    let condition = name ? { name: { [Op.like]: `%${name}%` } }: null
    //console.log(db)
    usersmodel.findAll( { where: condition } )
    .then( data => {
        res.status(200).json( { err: 0, message: data } )
    } )
    .catch( err => {
        res.status(200).json( { err: 2, message: `${err}` } )
    } )
}
//find One
exports.findOne = ( req, res ) => {
    let id = req.params.id
    //console.log(db)
    usersmodel.findByPk( id )
    .then( data => {
        res.status(200).json( { err: 0, message: data } )
    } )
    .catch( err => {
        res.status(200).json( { err: 2, message: `${err}` } )
    } )
}

//Update
exports.update = ( req, res ) => {
    let id = req.body.id
    usersmodel.update( req.body, { where: { id: id } } )
    .then( num => {
        //res.status(200).json( { err: 0, message: data } )
        if ( num  == 1) {
            res.status(200).json( { err: 0, message: "Updated" } )
        } else {
            res.status(200).json( { err: 0, message: `No se puede actualizar ID=${id}` } )
        }
    } )
    .catch( err => {
        res.status(200).json( { err: 2, message: `${err}` } )
    } )
}
