const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true },
    passwordHash: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

schema.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash)
};

schema.methods.generateJWT = function () {
  return jwt.sign(
    {
      email: this.email
    },
    process.env.JWT_SECRET_KEY
  )
};

schema.methods.toAuthJSON = function () {
  return {
    email: this.email,
    token: this.generateJWT()
  }
};

const User = mongoose.model('User', schema)

module.exports = User
