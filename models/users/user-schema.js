const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  role: {type: String, enumerable: ["GENERAL_USER", "ADMIN"]}
}, {collection: 'users'})
module.exports = userSchema