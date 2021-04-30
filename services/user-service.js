const userDao = require("../daos/user-dao")

const findUserById = (uid) =>
    userDao.findUserById(uid)

const createUser = (user) =>
    userDao.createUser(user)

const updateUser = (user) =>
    userDao.updateUser(user)

module.exports = {
  findUserById,
  createUser,
  updateUser
}