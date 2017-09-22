const express = require('express')
const router = express.Router()

const auth = require('../helpers/auth')
const controllerUser = require('../controllers/user')

router.get('/users', auth.isLogin, controllerUser.getAllUser)
router.get('/users/:id', controllerUser.getSingleUser)
// router.post('/signup', controllerUser.signUp)
// router.post('/signin', controllerUser.signIn)

module.exports = router
