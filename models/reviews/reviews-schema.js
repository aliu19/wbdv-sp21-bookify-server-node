const mongoose = require("mongoose")

const reviewsSchema = mongoose.Schema({
  userId: ObjectId,
  bookId: String,
  review: String
}, {collection: 'reviews'})
module.exports = reviewsSchema