const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
  userId: ObjectId,
  bookId: String,
  review: String
}, {collection: 'reviews'})
module.exports = reviewSchema