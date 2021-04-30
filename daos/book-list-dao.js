const booklistModel = require("../models/book-list/book-list-model")

const findAllBookLists = () =>
    booklistModel.find()

const findBookListsForUser = (uid) =>
    booklistModel.find({userId: uid})

const findBookListById = (blid) =>
    booklistModel.findById(blid)

const createBookList = (bookList) =>
    booklistModel.create(bookList)

const deleteBookList = (blid) =>
    booklistModel.findByIdAndRemove(blid)

const updateBookList = (blid, bookList) =>
    booklistModel.findByIdAndUpdate(blid, bookList)

module.exports = {
  findAllBookLists,
  findBookListsForUser,
  findBookListById,
  createBookList,
  deleteBookList,
  updateBookList
}