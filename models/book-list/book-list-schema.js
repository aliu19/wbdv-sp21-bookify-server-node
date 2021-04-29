const mongoose = require("mongoose")

const booklistsSchema = mongoose.Schema({
  books: {type: ObjectId, ref: "BookModel"}
}, {collection: 'booklists'})
module.exports = booklistsSchema