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

  const createBookList = (req, res) => {
    const userId = req.params["uid"]
    booklistService.createBookList(userId, req.body)
    .then((booklist) => {
      res.send(booklist)
    })
  }

  app.get("/api/users/:uid/booklists", findAllBookLists)
  app.get("/api/booklists/:blid", findBookListById)
  app.post("/api/users/:uid/booklists", createBookList)
}