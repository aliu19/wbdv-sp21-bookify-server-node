const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  role: {type: String, enumerable: ["GENERAL_USER", "ADMIN"]},
  bookLists: {type: String, ref: "BookListModel"}
}, {collection: 'users'})
module.exports = usersSchema