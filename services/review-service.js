const reviewDao = require("../daos/review-dao")

const findAllReviews = () =>
    reviewDao.findAllReviews()

const findReviewsForBook = (bid) =>
    reviewDao.findReviewsForBook(bid)

const findReviewsForUser = (uid) =>
    reviewDao.findReviewsForUser(uid)

const findReviewsForHome = () =>
    reviewDao.findReviewsForHome()

const createReview = (review) =>
    reviewDao.createReview(review)

const deleteReview = (rid) =>
    reviewDao.deleteReview(rid)

const updateReview = (rid, review) =>
    reviewDao.updateReview(rid, review)

module.exports = {
  findAllReviews,
  findReviewsForBook,
  findReviewsForUser,
  findReviewsForHome,
  createReview,
  deleteReview,
  updateReview
}
