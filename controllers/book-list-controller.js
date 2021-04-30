const booklistService = require("../services/book-list-service")

module.exports = (app) => {
  const findAllBookLists = (req, res) => {
    booklistService.findAllBookLists()
    .then((bookLists) => {
      res.send(bookLists)
    })
  }

  const findBookListsForUser = (req, res) => {
    const userId = req.params["uid"]
    booklistService.findBookListsForUser(userId)
    .then((bookLists) => {
      res.send(bookLists)
    })
  }

  const findBookListById = (req, res) => {
    const bookListId = req.params["blid"]
    booklistService.findBookListById(bookListId)
    .then((bookList) => {
      res.send(bookList)
    })
  }

  const createBookList = (req, res) => {
    booklistService.createBookList(req.body)
    .then((newBookList) => {
      res.send(newBookList)
    })
  }

  const deleteBookList = (req, res) => {
    const bookListId = req.params["blid"]
    booklistService.deleteBookList(bookListId)
    .then((status) => {
      res.send(status)
    })
  }

  const updateBookList = (req, res) => {
    const bookListId = req.params["blid"]
    const name = req.body
    booklistService.updateBookList(bookListId, name)
    .then((updatedBookList) => {
      res.send(updatedBookList)
    })
  }

  app.get("/api/booklists", findAllBookLists)
  app.get("/api/users/:uid/booklists", findBookListsForUser)
  app.get("/api/booklists/:blid", findBookListById)
  app.post("/api/booklists", createBookList)
  app.delete("/api/booklists/:blid", deleteBookList)
  app.put("/api/booklists/:blid", updateBookList)
}