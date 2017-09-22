const modelUser = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);
require('dotenv').config()

var getAllUser = (req,res) => {
  modelUser.find({}).then(dataUser=>{
    res.send(dataUser)
  }).catch(err=>{
    res.send(err)
  })
}

var getSingleUser = (req, res) => {
  modelUser.findById({_id:req.params.id})
  .then(dataUser=>{
    res.send(dataUser)
  }).catch(err=>{
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

var signIn = (req, res) => {
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
      }, 'rahasia')
      res.send({token:token})
    } else {
      res.status(401).send({
        status: 401,
        err:{
          msg: 'incorrect password'
        }
      })
    }
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  getAllUser, signUp, signIn,  getSingleUser
}
