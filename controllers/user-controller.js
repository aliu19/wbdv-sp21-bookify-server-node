const userService = require("../services/user-service")

module.exports = (app) => {
  const findAllUsers = (req, res) => {
    userService.findAllUsers()
    .then((users) => {
      res.send(users)
    })
  }

  const findUserById = (req, res) => {
    const userId = req.params["uid"]
    userService.findUserById(userId)
    .then((user) => {
      res.send(user)
    })
  }

  const createUser = (req, res) => {
    userService.findUserByUsername(req.body.username)
    .then((theActualUser) => {
      if (theActualUser.length > 0) {
        res.send("0")
      } else {
        userService.createUser(req.body)
        .then((newUser) => {
          req.session['profile'] = newUser
          res.send(newUser)
        })
      }
    })
  }

  const updateUser = (req, res) => {
    userService.updateUser(req.body)
    .then((updatedUser) => {
      res.send(updatedUser)
    })
  }

  const profile = (req, res) => {
    const currentUser = req.session['profile']
    res.send(currentUser)
  }

  app.get("/api/users", findAllUsers)
  app.get("/api/users/:uid", findUserById)
  app.post("/api/users", createUser)
  app.put("/api/users/:uid", updateUser)
  app.post("/api/users/profile", profile) // who is currently logged in
}