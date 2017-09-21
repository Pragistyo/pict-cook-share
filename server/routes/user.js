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
