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

  const register = (req, res) => {
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

  const login = (req, res) => {
    userService.findUserByCredentials(req.body)
    .then((actualUser) => {
      if (actualUser) {
        req.session['profile'] = actualUser
        res.send(actualUser)
      } else {
        res.send("0")
      }
    })
  }

  const logout = (req, res) => {
    req.session.destroy()
    res.send(200)
  }

  app.get("/api/users", findAllUsers)
  app.get("/api/users/:uid", findUserById)
  app.put("/api/users/:uid", updateUser)
  app.post("/api/register", register)
  app.post("/api/profile", profile) // who is currently logged in
  app.post("/api/login", login)
  app.post("/api/logout", logout)
}