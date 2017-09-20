const modelUser = require('../models/User')

var getAllUser = (req, res) => {
  modelUser.find()
  .then((users) => {
    res.send(users)
  })
  .catch((err) => {
    res.send(err)
  })
}


module.exports = {
  getAllUser
}