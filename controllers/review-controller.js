const reviewService = require("../services/review-service")

module.exports = (app) => {
  const findAllReviews = (req, res) => {
    reviewService.findAllReviews()
    .then((reviews) => {
      res.send(reviews)
    })
  }

  const findReviewsForBook = (req, res) => {
    const bookId = req.params["bid"]
    reviewService.findReviewsForBook(bookId)
    .then((reviews) => {
      res.send(reviews)
    })
  }

  const findReviewsForUser = (req, res) => {
    const userId = req.params["uid"]
    reviewService.findReviewsForUser(userId)
    .then((reviews) => {
      res.send(reviews)
    })
  }

  const findReviewsForHome = (req, res) => {
    reviewService.findReviewsForHome()
    .then((reviews) => {
      res.send(reviews)
    })
  }

  const createReview = (req, res) => {
    reviewService.createReview(req.body)
    .then((newReview) => {
      res.send(newReview)
    })
  }

  const deleteReview = (req, res) => {
    const reviewId = req.params["rid"]
    reviewService.deleteReview(reviewId)
    .then((status) => {
      res.send(status)
    })
  }

  const updateReview = (req, res) => {
    const reviewId = req.params["rid"]
    reviewService.updateReview(reviewId, req.body)
    .then((updatedReview) => {
      res.send(updatedReview)
    })
  }

  app.get("/api/reviews", findAllReviews)
  app.get("/api/books/:bid/reviews", findReviewsForBook)
  app.get("/api/users/:uid/reviews", findReviewsForUser)
  app.get("/api/home/reviews", findReviewsForHome)
  app.post("/api/reviews", createReview)
  app.delete("/api/reviews/:rid", deleteReview)
  app.put("/api/reviews/:rid", updateReview)
}