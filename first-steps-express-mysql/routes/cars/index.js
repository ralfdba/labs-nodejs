const cars = require("express").Router()
const all = require("./all.js")
const getbyid = require("./getby.js")

cars.get("/", all)
cars.get("/:id", getbyid)

module.exports = cars
