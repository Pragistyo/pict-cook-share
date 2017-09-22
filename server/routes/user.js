const express = require('express')
const router = express.Router()

const auth = require('../helpers/auth')
const controllerUser = require('../controllers/user')

// router.get('/', auth.isLogin, controllerUser.getAllUser)
router.get('/', controllerUser.getAllUser)
router.get('/:id', controllerUser.getSingleUser)


module.exports = router
