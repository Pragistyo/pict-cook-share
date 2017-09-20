const mongoose = require('mongoose')
const Schema = mongoose.Schema

var schemaUser = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: String
})

var User = mongoose.connect('User', schemaUser)

module.exports = User