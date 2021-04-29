const booklistService = require("../services/book-list-service")

module.exports = (app) => {
  const findAllBookLists = (req, res) => {
    booklistService.findAllBookLists()
    .then((bookLists) => {
      res.json(bookLists)
    })
  }

  const findBookListById = (req, res) => {
    const blid = req.params["blid"]
    booklistService.findBookListById(blid)
    .then((bookList) => {
      res.json(bookList)
    })
  }

  app.get("/api/booklists", findAllBookLists)
  app.get("/api/booklists/:blid", findBookListById)
}