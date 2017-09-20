const modelUser = require('../models/User')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10);
require('dotenv').config()

var getAllUser = (req, res) => {
  modelUser.find()
  .then((users) => {
    res.send(users)
  })
  .catch((err) => {
    res.send(err)
  })
}

var signUp = (req, res) => {
  let hashPassword = bcrypt.hashSync(req.body.password, salt);
  modelUser.create({
    username: req.body.username,
    password: hashPassword,
    email: req.body.email
  })
  .then((user) => {
    res.send({
      message: "Berhasil menambah user",
      user: user
    })
  })
  .catch(err => {
    res.send(err)
  })
}

var sigIn = (req, res) => {
  modelUser.findOne({
    username: req.body.username
  })
  .then((user) => {
    var decodePassword = bcrypt.compareSync(req.body.password, user.password)
    if(decodePassword) {
      var token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email
      }, process.env.SECRET_JWT)
      res.send(token)
    } else {
      res.send({
        message: "Password tidak cocok"
      })
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAllUser, signUp, sigIn
}