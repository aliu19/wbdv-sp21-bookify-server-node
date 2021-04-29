const mongoose = require("mongoose")
const booklistSchema = require("./book-list-schema")

const booklistModel = mongoose.model(
    "BookListModel",
    booklistSchema
)
module.exports = booklistModel