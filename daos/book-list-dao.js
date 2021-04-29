const booklistModel = require("../models/book-list/book-list-model")

const findAllBooks = () => booklistModel.find()
const findBookListById = (blid) => booklistModel.findById(blid)

module.exports = {
  findAllBooks,
  findBookListById
}