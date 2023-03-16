const models = require("express").Router()
const all = require("./all.js")
const getbyid = require("./getby.js")

models.get("/", all)
models.get("/:id", getbyid)

module.exports = models
