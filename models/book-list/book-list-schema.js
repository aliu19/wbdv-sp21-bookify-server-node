const mongoose = require("mongoose")

const booklistsSchema = mongoose.Schema({
  name: String,
  user: {type: ObjectId, ref: "UserModel"},
  books: [String]
}, {collection: 'booklists'})
module.exports = booklistsSchema