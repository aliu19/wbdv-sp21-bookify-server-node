const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
  userId: String,
  bookId: String,
  review: String
}, {collection: 'reviews'})
module.exports = reviewSchema