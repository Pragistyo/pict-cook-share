<<<<<<< HEAD
const express    = require('express');
const router     = express.Router();
const jwt        = require('../helper/jsonWebToken');
const controller = require('../controllers/userController');

console.log('======================');

router.get('/',(req,res)=>{
  res.send('==================================')
})

// router.get('/', jwt.isLogin,jwt.isAdmin,controller.getAllDataUsers);
//
// router.post('/', jwt.isLogin,jwt.isAdmin,controller.createDataUsers);
//
// router.get('/:id', jwt.isLogin,jwt.authUser,controller.findByIdUser);
//
// router.put('/:id', jwt.isLogin,jwt.authUser,controller.editDataUser);
//
// router.delete('/:id', jwt.isLogin,jwt.isAdmin,controller.deleteUser);


module.exports = router
=======
const express = require('express')
const router = express.Router()

const auth = require('../helpers/auth')
const controllerUser = require('../controllers/user')

router.get('/users', auth.isLogin, controllerUser.getAllUser)
router.post('/signup', controllerUser.signUp)
router.post('/signin', controllerUser.signIn)

module.exports = router
>>>>>>> 26d901a1e8533f34195cd15ae5a6aef3e06c5dc6
