const reviewModel = require("../models/reviews/review-model")

const findAllReviews = () =>
    reviewModel.find()

const findReviewsForBook = (bid) =>
    reviewModel.find({bookId: bid})

const findReviewsForUser = (uid) =>
    reviewModel.find({userId: uid})

const findReviewsForHome = () =>
    reviewModel.find().sort({_id: -1}).limit(10)

const createReview = (review) =>
    reviewModel.create(review)

const deleteReview = (rid) =>
    reviewModel.findByIdAndRemove(rid)

const updateReview = (rid, review) =>
    reviewModel.findByIdAndUpdate(rid, review)

module.exports = {
  findAllReviews,
  findReviewsForBook,
  findReviewsForUser,
  findReviewsForHome,
  createReview,
  deleteReview,
  updateReview
}