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
    const userId = req.params["uid"]
    const name = req.body
    booklistService.createBookList(userId, name)
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
  app.get("/api/users/:uid/booklists/:blid", findBookListById)
  app.post("/api/users/:uid/booklists", createBookList)
  app.delete("/api/users/:uid/booklists/:blid", deleteBookList)
  app.put("/api/users/:uid/booklists/:blid", updateBookList)
}