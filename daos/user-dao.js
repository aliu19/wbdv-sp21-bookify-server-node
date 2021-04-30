const userModel = require("../models/users/user-model")

const findAllUsers = () =>
    userModel.find()

const findUserById = (uid) =>
    userModel.findById(uid)

const findUserByUsername = (username) =>
    userModel.find({username: username})

const createUser = (user) =>
    userModel.create(user)

const updateUser = (user) =>
    userModel.findByIdAndUpdate(user._id, user)

module.exports = {
  findAllUsers,
  findUserById,
  findUserByUsername,
  createUser,
  updateUser
}