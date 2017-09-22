const jwt = require('jsonwebtoken')
require('dotenv').config()

var isLogin = (req,res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_JWT, (err, decoded) => {
    if(err) {
      res.send(err)
    } else{
      next()
    }
  })
}

module.exports = {
  isLogin
}