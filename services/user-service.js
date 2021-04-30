const userDao = require("../daos/user-dao")

const findAllUsers = () =>
    userDao.findAllUsers()

const findUserById = (uid) =>
    userDao.findUserById(uid)

const findUserByUsername = (username) =>
    userDao.findUserByUsername(username)

const createUser = (user) =>
    userDao.createUser(user)

const updateUser = (user) =>
    userDao.updateUser(user)

module.exports = {
  findAllUsers,
  findUserById,
  findUserByUsername,
  createUser,
  updateUser
}