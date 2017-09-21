const jwt = require('jsonwebtoken');
require('dotenv').config()

let isLogin = (req,res,next)=>{
  // jwt.verify(token, 'shhhhh', function(err, decoded) {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err,decode)=>{
    if(!err){
      req.role = decode.role
      req.id = decode.id
      next()
    }
    else{
      res.send(err)
    }
  })
}

let isAdmin = (req,res,next) =>{
  if(req.role === 'admin'){
    next()
  }else{
    res.send('invalid authority, you are not admin')
  }
}

let authUser = (req,res,next) =>{
  // console.log(typeof req.params.id);
  // console.log('============');
  // console.log(typeof req.id);
  if(req.params.id == req.id || req.role === 'admin'){
    next()
  }else{
    res.send('invalid authority')
  }
}

module.exports = {
  isLogin,
  isAdmin,
  authUser
}
