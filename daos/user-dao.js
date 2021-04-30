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
    userModel.updateOne({_id: user._id}, {$set: user})

const findUserByCredentials = (credentials) =>
    userModel.findOne({
      username: credentials.username,
      password: credentials.password
    })

module.exports = {
  findAllUsers,
  findUserById,
  findUserByUsername,
  createUser,
  updateUser,
  findUserByCredentials
}