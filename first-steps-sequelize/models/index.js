const config = require("../database/config")
const Sequelize = require("sequelize")
const conn = new Sequelize( config.DB, config.USER, config.PASSWORD, {
    dialect: config.dialect,
    host: config.HOST,
    port: 1433
} )

const db = {}
db.Sequelize = Sequelize
db.conn = conn
db.users = require("./all")( conn, Sequelize )

module.exports = db