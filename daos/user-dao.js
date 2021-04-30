const userModel = require("../models/users/user-model")

const findUserById = (uid) =>
    userModel.findById(uid)

const createUser = (user) =>
    userModel.create(user)

const updateUser = (user) =>
    userModel.findByIdAndUpdate(user._id, user)

module.exports = {
  findUserById,
  createUser,
  updateUser
}