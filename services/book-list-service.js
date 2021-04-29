const booklistDao = require("../daos/book-list-dao")

const findAllBooks = () => booklistDao.findAllBooks()
const findBookListById = (blid) => booklistDao.findBookListById(blid)

module.exports = {
  findAllBooks,
  findBookListById
}