const mongoose = require("mongoose")

const reviewsSchema = mongoose.Schema({
  userId: String,
  bookId: String,
  review: String
}, {collection: 'reviews'})