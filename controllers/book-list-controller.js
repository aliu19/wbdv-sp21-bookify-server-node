const booklistService = require("../services/book-list-service")

module.exports = (app) => {
  const findAllBookLists = (req, res) => {
    booklistService.findAllBookLists()
    .then((bookLists) => {
      res.json(bookLists)
    })
  }

  const findBookListsForUser = (req, res) => {
    const userId = req.params["uid"]
    booklistService.findBookListsForUser(userId)
    .then((booklists) => {
      res.json(booklists)
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
    const name = req.body
    booklistService.createBookList(userId, name)
    .then((booklist) => {
      res.send(booklist)
    })
  }

  app.get("/api/booklists", findAllBookLists)
  app.get("/api/users/:uid/booklists", findBookListsForUser)
  app.get("/api/users/:uid/booklists/:blid", findBookListById)
  app.post("/api/users/:uid/booklists", createBookList)
}