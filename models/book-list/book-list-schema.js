const mongoose = require("mongoose")

const booklistsSchema = mongoose.Schema({
  books: {type: String, ref: "BookModel"}
}, {collection: 'booklists'})