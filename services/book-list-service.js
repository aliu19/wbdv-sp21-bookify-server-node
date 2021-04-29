const booklistDao = require("../daos/book-list-dao")

const findAllBooks = () =>
    booklistDao.findAllBooks()

const findBookListById = (blid) =>
    booklistDao.findBookListById(blid)

const createBookList = (userId, title) =>
    booklistDao.createBookList(userId, title)


module.exports = {
  findAllBooks,
  findBookListById,
  createBookList
}