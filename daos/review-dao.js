const reviewModel = require("../models/reviews/review-model")

const findReviewsForBook = (bid) =>
    reviewModel.find({bookId: bid})

const findReviewsForUser = (uid) =>
    reviewModel.find({userId: uid})

const createReview = (review) =>
    reviewModel.create(review)

const deleteReview = (rid) =>
    reviewModel.findByIdAndRemove(rid)

const updateReview = (rid, review) =>
    reviewModel.findByIdAndUpdate(rid, review)

module.exports = {
  findReviewsForBook,
  findReviewsForUser,
  createReview,
  deleteReview,
  updateReview
}