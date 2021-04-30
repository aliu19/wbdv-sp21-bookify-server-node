const mongoose = require("mongoose")
const userSchema = require("./user-schema")

const userModel = mongoose.model(
    "UsersModel",
    userSchema
)
module.exports = userModel