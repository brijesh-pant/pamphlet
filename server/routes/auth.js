const express = require('express')
const bcrypt = require('bcrypt')
const UserModel = require('../models/User')

const router = express.Router()

router.post('/', (req, res) => {
  const { email, password } = req.body

  UserModel.create({
    email,
    passwordHash: bcrypt.hashSync(password, 10)
  }).then(user => {
    if (user && user.isValidPassword(password)) {
    }
    res.status(200).json({ user: user.toAuthJSON() })
  })
})

module.exports = router
