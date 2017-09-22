const modelUser = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
var salt = bcrypt.genSaltSync(10);

var signUp = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt)
  modelUser.create({
    username: req.body.username,
    password: hash,
    email: req.body.email
  }).then(dataUser=>{
    res.send(dataUser)
  }).catch(err=>{
    res.send(err)
  })
}

var getAllUser = (req,res) => {
  modelUser.find({}).then(dataUser=>{
    res.send(dataUser)
  }).catch(err=>{
    res.send(err)
  })
}

var getSingleUser = (req, res) => {
  modelUser.findById({_id:req.params.id}).then(dataUser=>{
    res.send(dataUser)
  }).catch(err=>{
    res.send(err)
  })
}

var deleteUser = (req, res) => {
  modelUser.remove({_id:req.params.id}).then(dataUser=>{
    res.send('user has been remove')
  }).catch(err=>{
    res.send(err)
  })
}

var updateUser = (req, res) => {
  modelUser.findById({_id:req.params.id}).then(dataUser=>{
    console.log('data user by id: ', dataUser);
    modelUser.update({
      _id:dataUser._id
    }, {
      $set:{
        username: req.body.username || dataUser.username,
        email: req.body.email || dataUser.email,
        password: req.body.password || dataUser.password
      }
    }).then(dataUpdate => {
      console.log('data berhasil update', dataUpdate);
      res.send(dataUpdate)
    }).catch(err => {
      res.send(err)
    })
  }).catch(err => {
    res.send(err)
  })
}

var signIn = (req,res) => {
  modelUser.find({username:req.body.username}).then(dataUser=>{
    console.log('data user: ', dataUser);
    if (bcrypt.compareSync(req.body.password, dataUser[0].password)) {
      let token = jwt.sign(
        {
          username:dataUser[0].username, email: dataUser[0].email
        }, process.env.JWT_SCRT, {expiresIn:'1h'})
        console.log('signin succsess');
        res.send({token:token})
    } else {
      res.send('incorrect password')
    }
  }).catch(err => {
    res.send(err)
  })
}

module.exports = {
  signUp,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
  signIn
}
