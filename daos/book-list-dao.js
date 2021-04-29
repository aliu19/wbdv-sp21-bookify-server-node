const booklistModel = require("../models/book-list/book-list-model")

const findAllBooks = () =>
    booklistModel.find()

const findBookListById = (blid) =>
    booklistModel.findById(blid)

const createBookList = (userId, title) =>
    booklistModel.create({
      name: title,
      user: userId,
      books: []
    })

module.exports = {
  findAllBooks,
  findBookListById,
  createBookList
}