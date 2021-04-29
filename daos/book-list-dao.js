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

module.exports = {
  findAllBookLists,
  findBookListsForUser,
  findBookListById,
  createBookList
}