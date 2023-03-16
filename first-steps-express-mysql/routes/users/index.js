const users = require("express").Router()
const all = require("./all.js")

users.get("/", all.getAll)
users.get("/:id", all.getById)
users.post("/", all.create)

module.exports = users
