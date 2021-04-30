const userService = require("../services/user-service")

module.exports = (app) => {
  const findUserById = (req, res) => {
    const userId = req.params["uid"]
    userService.findUserById(userId)
    .then((user) => {
      res.send(user)
    })
  }

  const createUser = (req, res) => {
    userService.createUser(req.body)
    .then((newUser) => {
      res.send(newUser)
    })
  }

  const updateUser = (req, res) => {
    userService.updateUser(req.body)
    .then((updatedUser) => {
      res.send(updatedUser)
    })
  }

  app.get("/api/users/:uid", findUserById)
  app.post("/api/users", createUser)
  app.put("/api/users/:uid", updateUser)
}