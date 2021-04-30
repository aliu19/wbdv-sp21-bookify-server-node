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

const updateBookList = (blid, name) =>
    booklistModel.findByIdAndUpdate(blid, {name: name})

module.exports = {
  findAllBookLists,
  findBookListsForUser,
  findBookListById,
  createBookList,
  deleteBookList,
  updateBookList
}