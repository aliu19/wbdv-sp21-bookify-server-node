const mongoose = require("mongoose")

const booklistSchema = mongoose.Schema({
  name: String,
  userId: {type: String, ref: "UserModel"},
  books: [String]
}, {collection: 'booklists'})
module.exports = booklistSchema