const model   = require('../models/User');
const bcrypt  = require('bcryptjs');
const salt    = bcrypt.genSaltSync(10);
const jwt     = require('jsonwebtoken');
require('dotenv').config()

// console.log('HAHAHAHAHAH');
const signup = (req, res) => {
  // console.log(req.body.password,'================');
  var hash = bcrypt.hashSync(req.body.password, salt);;
  model.User.create({
    username: `${req.body.username}`,
    password: hash,
    email: `${req.body.email}`
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

let signin = (req, res) => {
  console.log(req.body.password);
  model.User.findOne({
    where:{
      username:req.body.username
    }
  })
  .then(data => {
    if (bcrypt.compareSync(req.body.password, data.password)) {
      var token = jwt.sign({
        id       : data.id,
        username : data.username,
        role     : data.role
      }, process.env.SECRET_KEY)
      res.send(token)
    }
  })
  .catch(err => {
    res.send("Invalid Password")
  })
}


let getAllDataUsers = (req, res) => {
    model.User.findAll({order:[['id','ASC']]})
    .then(data => {
      res.send(data);
  })
}

let createDataUsers = (req,res)=>{
  model.User.create({
                  username:`${req.body.username}`,
                  password:`${req.body.password}`,
                  role:`${req.body.role}`
  }).then(result=>{
    res.send('add data success')
  })
  .catch(err=>{
    res.send(err)
  })
}

let findByIdUser = (req, res) => {
  model.User.findById(req.params.id)
  .then(data => {
    res.send(data)
  })
}

let editDataUser = (req, res) => {
  model.User.update({
    username: `${req.body.username}`,
    password: `${req.body.password}`,
    role: `${req.body.role}`
  },{
    where: {
      id: `${req.params.id}`
    }
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

let deleteUser = (req, res) => {
  model.User.destroy({
    where:{
      id:`${req.params.id}`
    }
  })
  .then(() => {
    model.User.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  })
}



module.exports = {
  getAllDataUsers,
  createDataUsers,
  signup,
  findByIdUser,
  editDataUser,
  signin,
  deleteUser
}
