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
    .then((booklists) => {
      res.send(booklists)
    })
  }

  const findBookListById = (req, res) => {
    const blid = req.params["blid"]
    booklistService.findBookListById(blid)
    .then((bookList) => {
      res.send(bookList)
    })
  }

  const createBookList = (req, res) => {
    const userId = req.params["uid"]
    const name = req.body
    booklistService.createBookList(userId, name)
    .then((newBooklist) => {
      res.send(newBooklist)
    })
  }

  const deleteBookList = (req, res) => {
    const booklistId = req.params["bklist"]
    booklistService.deleteBookList(booklistId)
    .then((status) => {
      res.send(status)
    })
  }

  const updateBookList = (req, res) => {
    const booklistId = req.params["bklist"]
    const name = req.body
    booklistService.updateBookList(booklistId, name)
    .then((updatedBookList) => {
      res.send(updatedBookList)
    })
  }

  app.get("/api/booklists", findAllBookLists)
  app.get("/api/users/:uid/booklists", findBookListsForUser)
  app.get("/api/users/:uid/booklists/:blid", findBookListById)
  app.post("/api/users/:uid/booklists", createBookList)
  app.delete("/api/users/:uid/booklists/:bklist", deleteBookList)
  app.put("/api/users/:uid/booklists/:bklist", updateBookList)
}