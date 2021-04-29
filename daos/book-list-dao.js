const booklistModel = require("../models/book-list/book-list-model")

const findAllBookLists = () =>
    booklistModel.find()

const findBookListsForUser = (uid) =>
    booklistModel.find({user: uid}) //TODO uid or deconstruct bc it has all user fields?

const findBookListById = (blid) =>
    booklistModel.findById(blid)

const createBookList = (userId, name) =>
    booklistModel.create({
      name: name,
      user: userId,
      books: []
    })

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