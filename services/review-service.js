const reviewDao = require("../daos/review-dao")

const findReviewsForBook = (bid) =>
    reviewDao.findReviewsForBook(bid)

const findReviewsForUser = (uid) =>
    reviewDao.findReviewsForUser(uid)

const createReview = (review) =>
    reviewDao.createReview(review)

const deleteReview = (rid) =>
    reviewDao.deleteReview(rid)

const updateReview = (rid, review) =>
    reviewDao.updateReview(rid, review)

module.exports = {
  findReviewsForBook,
  findReviewsForUser,
  createReview,
  deleteReview,
  updateReview
}
